import { Request, Response } from "express";
import { container } from "tsyringe";

import { LancesService } from "../services/LancesService";

class LancesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { id_provider, id_offer, value, amount } = request.body;
    const service = container.resolve(LancesService);

    const lance = {
      id_provider,
      id_offer,
      value,
      amount,
    };

    await service.create(lance);
    return response.status(201).json(lance);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(LancesService);
    const lances = await service.list();

    return response.status(200).json(lances);
  }
}

export { LancesController };
