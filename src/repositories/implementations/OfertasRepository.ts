import { getRepository, Repository } from "typeorm";

import { ICreateOfertaDTO } from "../../dtos/IOfertaDTO";
import { Embarcador } from "../../entities/Embarcador";
import { Oferta } from "../../entities/Oferta";
import { IOfertasRepository } from "../IOfertasRepository";

class OfertasRepository implements IOfertasRepository {
  private repository: Repository<Oferta>;
  private embarcadoresRepository: Repository<Embarcador>;

  constructor() {
    this.repository = getRepository(Oferta);
    this.embarcadoresRepository = getRepository(Embarcador);
  }

  async create(data: ICreateOfertaDTO): Promise<void> {
    const oferta = this.repository.create({
      id_customer: data.id_customer,
      from: data.from,
      to: data.to,
      initial_value: data.initial_value,
      amount: data.amount,
      amount_type: data.amount_type,
    });

    await this.repository.save(oferta);
  }

  async list(): Promise<Oferta[]> {
    const ofertas = await this.repository.find({ relations: ["embarcador"] });
    return ofertas;
  }

  async findById(id: string): Promise<Oferta> {
    const embarcador = await this.repository.findOne({
      where: { id_customer: id },
    });
    return embarcador;
  }

  async findByCustomerId(id: string): Promise<Embarcador> {
    const embarcador = await this.embarcadoresRepository.findOne({
      where: { id },
    });
    return embarcador;
  }
}

export { OfertasRepository };
