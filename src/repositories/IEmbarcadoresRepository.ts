import { ICreateEmbarcadorDTO } from "../dtos/IEmbarcadorDTO";
import { Embarcador } from "../entities/Embarcador";

interface IEmbarcadoresRepository {
  create(data: ICreateEmbarcadorDTO): Promise<void>;
  list(): Promise<Embarcador[]>;
  findByDoc(doc: string): Promise<Embarcador>;
}

export { IEmbarcadoresRepository };
