import { Request, Response } from "express";
import { container } from "tsyringe";

import { OfertasService } from "../services/OfertasService";

class OfertasController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      id_customer,
      from,
      to,
      initial_value,
      amount,
      amount_type,
    } = request.body;

    const service = container.resolve(OfertasService);

    const oferta = {
      id_customer,
      from,
      to,
      initial_value,
      amount,
      amount_type,
    };

    await service.create(oferta);

    return response.status(201).json(oferta);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(OfertasService);
    const ofertas = await service.list();

    return response.status(200).json(ofertas);
  }
}

export { OfertasController };
