import { inject, injectable } from "tsyringe";

import { ICreateLanceDTO } from "../dtos/ILanceDTO";
import { Lance } from "../entities/Lance";
import { AppError } from "../errors/AppError";
import { ILancesRepository } from "../repositories/ILancesRepository";

@injectable()
class LancesService {
  constructor(
    @inject("LancesRepository")
    private lancesRepository: ILancesRepository
  ) {}

  async create(data: ICreateLanceDTO): Promise<void> {
    const lanceExiste = await this.lancesRepository.findById(data.id_provider);

    const transportadorExiste = await this.lancesRepository.findByProviderId(
      data.id_provider
    );
    console.log(lanceExiste);

    if (lanceExiste) {
      throw new AppError("Lance ja cadastrado!");
    }

    if (!transportadorExiste) {
      throw new AppError("Transportador  não existe!");
    }

    this.lancesRepository.create({
      id_provider: data.id_provider,
      id_offer: data.id_offer,
      value: data.value,
      amount: data.amount,
    });
  }

  async list(): Promise<Lance[]> {
    const lances = await this.lancesRepository.list();

    return lances;
  }
}

export { LancesService };
