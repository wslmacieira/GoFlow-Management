import { Router } from "express";
import multer from "multer";

import { EmbarcadoresController } from "../controllers/EmbarcadoresController";

const embarcadoresRoutes = Router();

const embarcadoresController = new EmbarcadoresController();

const upload = multer({
  dest: "./tmp",
});

embarcadoresRoutes.post("/", embarcadoresController.create);

embarcadoresRoutes.get("/", embarcadoresController.list);

embarcadoresRoutes.post(
  "/import",
  upload.single("file"),
  embarcadoresController.importFile
);

export { embarcadoresRoutes };
