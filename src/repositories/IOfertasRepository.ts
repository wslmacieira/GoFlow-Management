import { ICreateOfertaDTO } from "../dtos/IOfertaDTO";
import { Embarcador } from "../entities/Embarcador";
import { Oferta } from "../entities/Oferta";

interface IOfertasRepository {
  create(data: ICreateOfertaDTO): Promise<void>;
  list(): Promise<Oferta[]>;
  findById(id: string): Promise<Oferta>;
  findByCustomerId(id: string): Promise<Embarcador>;
}

export { IOfertasRepository };
