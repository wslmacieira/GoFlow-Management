import { Router } from "express";

import { embarcadoresRoutes } from "./embarcadores.routes";
import { lancesRoutes } from "./lances.routes";
import { ofertasRoutes } from "./ofertas.routes";
import { transportadorasRoutes } from "./transportadoras.routes";

const router = Router();

router.use("/embarcadores", embarcadoresRoutes);

router.use("/transportadoras", transportadorasRoutes);

router.use("/ofertas", ofertasRoutes);

router.use("/lances", lancesRoutes);

export { router };
