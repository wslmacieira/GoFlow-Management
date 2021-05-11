import { getRepository, Repository } from "typeorm";

import { ICreateLanceDTO } from "../../dtos/ILanceDTO";
import { Lance } from "../../entities/Lance";
import { Transportador } from "../../entities/Transportador";
import { ILancesRepository } from "../ILancesRepository";

class LancesRepository implements ILancesRepository {
  private repository: Repository<Lance>;
  private transportadoresRepository: Repository<Transportador>;

  constructor() {
    this.repository = getRepository(Lance);
    this.transportadoresRepository = getRepository(Transportador);
  }

  async create(data: ICreateLanceDTO): Promise<void> {
    const lance = this.repository.create({
      id_provider: data.id_provider,
      id_offer: data.id_offer,
      value: data.value,
      amount: data.amount,
    });

    await this.repository.save(lance);
  }

  async list(): Promise<Lance[]> {
    const lances = await this.repository.find({
      relations: ["transportador"],
    });
    return lances;
  }

  async findById(id: string): Promise<Lance> {
    const lance = await this.repository.findOne({
      where: { id_provider: id },
    });
    return lance;
  }

  async findByProviderId(id: string): Promise<Transportador> {
    const transportador = await this.transportadoresRepository.findOne({
      where: { id },
    });
    return transportador;
  }
}

export { LancesRepository };
