import { inject, injectable } from "tsyringe";

import { ICreateTransportadorDTO } from "../dtos/ITransportadorDTO";
import { Transportador } from "../entities/Transportador";
import { AppError } from "../errors/AppError";
import { ITransportadorasRepository } from "../repositories/ITransportadorasRepository";

@injectable()
class TransportadorasService {
  constructor(
    @inject("TransportadorasRepository")
    private transportadorasRepository: ITransportadorasRepository
  ) {}

  async create(data: ICreateTransportadorDTO): Promise<void> {
    const specificationAlreadyExists = await this.transportadorasRepository.findByDoc(
      data.doc
    );

    if (specificationAlreadyExists) {
      throw new AppError("Transportadora ja cadastrada!");
    }

    await this.transportadorasRepository.create({
      name: data.name,
      doc: data.doc,
      about: data.about,
      active: data.active,
      site: data.site,
    });
  }

  async list(): Promise<Transportador[]> {
    const transportadoras = this.transportadorasRepository.list();

    return transportadoras;
  }
}

export { TransportadorasService };
