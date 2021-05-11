import { Request, Response } from "express";
import { container } from "tsyringe";

import { EmbarcadoresService } from "../services/EmbarcadoresService";

class EmbarcadoresController {
  async importFile(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const service = container.resolve(EmbarcadoresService);

    await service.importFile(file);

    return response.status(201).send();
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, doc, about, active, site } = request.body;
    const service = container.resolve(EmbarcadoresService);

    const embarcador = {
      name,
      doc,
      about,
      active,
      site,
    };

    await service.create(embarcador);

    return response.status(201).json(embarcador);
  }

  async list(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(EmbarcadoresService);
    const embarcadores = await service.list();

    return response.json(embarcadores);
  }
}

export { EmbarcadoresController };
