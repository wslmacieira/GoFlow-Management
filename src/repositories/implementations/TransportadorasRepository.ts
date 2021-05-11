import { getRepository, Repository } from "typeorm";

import { ICreateTransportadorDTO } from "../../dtos/ITransportadorDTO";
import { Transportador } from "../../entities/Transportador";
import { ITransportadorasRepository } from "../ITransportadorasRepository";

class TransportadorasRepository implements ITransportadorasRepository {
  private repository: Repository<Transportador>;

  constructor() {
    this.repository = getRepository(Transportador);
  }

  async create(data: ICreateTransportadorDTO): Promise<void> {
    const specification = this.repository.create({
      name: data.name,
      doc: data.doc,
      about: data.about,
      active: data.active,
      site: data.site,
    });

    await this.repository.save(specification);
  }

  async findByDoc(doc: string): Promise<Transportador> {
    const transportador = this.repository.findOne({ doc });
    return transportador;
  }

  async list(): Promise<Transportador[]> {
    const transportadoras = this.repository.find();
    return transportadoras;
  }
}

export { TransportadorasRepository };
