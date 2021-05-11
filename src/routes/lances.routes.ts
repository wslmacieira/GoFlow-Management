import { Router } from "express";

import { LancesController } from "../controllers/LancesController";

const lancesRoutes = Router();

const lancesController = new LancesController();
lancesRoutes.post("/", lancesController.create);

lancesRoutes.get("/", lancesController.list);

export { lancesRoutes };
