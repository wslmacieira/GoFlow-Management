import { Request, Response } from "express";
import { container } from "tsyringe";

import { TransportadorasService } from "../services/TransportadorasService";

class TransportadorasController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, doc, about, active, site } = request.body;
    const service = container.resolve(TransportadorasService);

    const transportador = {
      name,
      doc,
      about,
      active,
      site,
    };

    await service.create(transportador);

    return response.status(201).json(transportador);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(TransportadorasService);
    const transportadoras = await service.list();

    return response.json(transportadoras);
  }
}

export { TransportadorasController };
