import { getRepository, Repository } from "typeorm";

import { ICreateEmbarcadorDTO } from "../../dtos/IEmbarcadorDTO";
import { Embarcador } from "../../entities/Embarcador";
import { IEmbarcadoresRepository } from "../IEmbarcadoresRepository";

class EmbarcadoresRepository implements IEmbarcadoresRepository {
  private repository: Repository<Embarcador>;

  constructor() {
    this.repository = getRepository(Embarcador);
  }

  async create(data: ICreateEmbarcadorDTO): Promise<void> {
    const embarcador = this.repository.create({
      name: data.name,
      doc: data.doc,
      about: data.about,
      active: data.active,
      site: data.site,
    });

    await this.repository.save(embarcador);
  }

  async list(): Promise<Embarcador[]> {
    const embarcadores = await this.repository.find();
    return embarcadores;
  }

  async findByDoc(doc: string): Promise<Embarcador> {
    const embarcador = await this.repository.findOne({ doc });
    return embarcador;
  }
}

export { EmbarcadoresRepository };
