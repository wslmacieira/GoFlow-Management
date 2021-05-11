import { ICreateLanceDTO } from "../dtos/ILanceDTO";
import { Lance } from "../entities/Lance";
import { Transportador } from "../entities/Transportador";

interface ILancesRepository {
  create(data: ICreateLanceDTO): Promise<void>;
  list(): Promise<Lance[]>;
  findById(id: string): Promise<Lance>;
  findByProviderId(id: string): Promise<Transportador>;
}

export { ILancesRepository };
