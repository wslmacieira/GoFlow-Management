import { ICreateTransportadorDTO } from "../dtos/ITransportadorDTO";
import { Transportador } from "../entities/Transportador";

interface ITransportadorasRepository {
  findByDoc(doc: string): Promise<Transportador>;
  list(): Promise<Transportador[]>;
  create(data: ICreateTransportadorDTO): Promise<void>;
}

export { ITransportadorasRepository };
