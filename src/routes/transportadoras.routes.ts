import { Router } from "express";

import { TransportadorasController } from "../controllers/TransportadorasController";

const transportadorasRoutes = Router();

const transportadoresController = new TransportadorasController();

transportadorasRoutes.post("/", transportadoresController.create);

transportadorasRoutes.get("/", (request, response) => {
  return transportadoresController.list(request, response);
});

export { transportadorasRoutes };
