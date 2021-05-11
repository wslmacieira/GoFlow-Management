import { container } from "tsyringe";

import { IEmbarcadoresRepository } from "../../repositories/IEmbarcadoresRepository";
import { ILancesRepository } from "../../repositories/ILancesRepository";
import { EmbarcadoresRepository } from "../../repositories/implementations/EmbarcadoresRepository";
import { LancesRepository } from "../../repositories/implementations/LancesRepository";
import { OfertasRepository } from "../../repositories/implementations/OfertasRepository";
import { TransportadorasRepository } from "../../repositories/implementations/TransportadorasRepository";
import { IOfertasRepository } from "../../repositories/IOfertasRepository";
import { ITransportadorasRepository } from "../../repositories/ITransportadorasRepository";

container.registerSingleton<IEmbarcadoresRepository>(
  "EmbarcadoresRepository",
  EmbarcadoresRepository
);

container.registerSingleton<ITransportadorasRepository>(
  "TransportadorasRepository",
  TransportadorasRepository
);

container.registerSingleton<IOfertasRepository>(
  "OfertasRepository",
  OfertasRepository
);

container.registerSingleton<ILancesRepository>(
  "LancesRepository",
  LancesRepository
);
