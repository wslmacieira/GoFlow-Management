import { Router } from "express";

import { OfertasController } from "../controllers/OfertasController";

const ofertasRoutes = Router();

const ofertasController = new OfertasController();

ofertasRoutes.post("/", ofertasController.create);

ofertasRoutes.get("/", ofertasController.list);

export { ofertasRoutes };
