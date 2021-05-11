import csvParse from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import {
  ICreateEmbarcadorDTO,
  IImportEmbarcadorDTO,
} from "../dtos/IEmbarcadorDTO";
import { Embarcador } from "../entities/Embarcador";
import { AppError } from "../errors/AppError";
import { IEmbarcadoresRepository } from "../repositories/IEmbarcadoresRepository";

@injectable()
class EmbarcadoresService {
  constructor(
    @inject("EmbarcadoresRepository")
    private embarcadoresRepository: IEmbarcadoresRepository
  ) {}

  async importFile(file: Express.Multer.File): Promise<IImportEmbarcadorDTO[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const embarcadores: IImportEmbarcadorDTO[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, doc, about, active, site] = line;

          embarcadores.push({
            name,
            doc,
            about,
            active,
            site,
          });
        })
        .on("end", () => {
          resolve(embarcadores);
          embarcadores.map(async (embarcador) => {
            const { name, doc, about, active, site } = embarcador;

            const existeEmbarcador = await this.embarcadoresRepository.findByDoc(
              doc
            );

            if (!existeEmbarcador) {
              await this.embarcadoresRepository.create({
                name,
                doc,
                about,
                active,
                site,
              });
            }
            fs.promises.unlink(file.path);
          });
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async create(data: ICreateEmbarcadorDTO): Promise<void> {
    const embarcadorExiste = await this.embarcadoresRepository.findByDoc(
      data.doc
    );

    if (embarcadorExiste) {
      throw new AppError("Embarcador ja cadastrado!");
    }

    this.embarcadoresRepository.create({
      name: data.name,
      doc: data.doc,
      about: data.about,
      active: data.active,
      site: data.site,
    });
  }

  async list(): Promise<Embarcador[]> {
    const embarcadores = await this.embarcadoresRepository.list();

    return embarcadores;
  }
}

export { EmbarcadoresService };
