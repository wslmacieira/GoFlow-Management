import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Base } from "./Base";
import { Embarcador } from "./Embarcador";
import { Oferta } from "./Oferta";
import { Transportador } from "./Transportador";

@Entity("lances")
class Lance extends Base {
  @Column()
  id_offer: string;

  @Column()
  id_provider: string;

  @JoinColumn({ name: "id_provider" })
  @ManyToOne(() => Transportador)
  transportador: Transportador;

  @Column()
  value: number;

  @Column()
  amount: number;

  constructor() {
    super();
  }
}

export { Lance };
