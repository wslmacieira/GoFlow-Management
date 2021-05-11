import { inject, injectable } from "tsyringe";

import { ICreateOfertaDTO } from "../dtos/IOfertaDTO";
import { Oferta } from "../entities/Oferta";
import { AppError } from "../errors/AppError";
import { IOfertasRepository } from "../repositories/IOfertasRepository";

@injectable()
class OfertasService {
  constructor(
    @inject("OfertasRepository")
    private ofertasRepository: IOfertasRepository
  ) {}

  async create(data: ICreateOfertaDTO): Promise<void> {
    const ofertaExiste = await this.ofertasRepository.findById(
      data.id_customer
    );
    const embarcadorExiste = await this.ofertasRepository.findByCustomerId(
      data.id_customer
    );

    if (ofertaExiste) {
      throw new AppError("Oferta ja cadastrada!");
    }

    if (!embarcadorExiste) {
      throw new AppError("Embarcador  não existe!");
    }

    await this.ofertasRepository.create({
      id_customer: data.id_customer,
      from: data.from,
      to: data.to,
      initial_value: data.initial_value,
      amount: data.amount,
      amount_type: data.amount_type,
    });
  }

  async list(): Promise<Oferta[]> {
    const ofertas = await this.ofertasRepository.list();

    return ofertas;
  }
}

export { OfertasService };
