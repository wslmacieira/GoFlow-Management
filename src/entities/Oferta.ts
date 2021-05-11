import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Base } from "./Base";
import { Embarcador } from "./Embarcador";

@Entity("ofertas")
class Oferta extends Base {
  @Column()
  id_customer: string;

  @JoinColumn({ name: "id_customer" })
  @ManyToOne(() => Embarcador)
  embarcador: Embarcador;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  initial_value: number;

  @Column()
  amount: number;

  @Column()
  amount_type: string;

  constructor() {
    super();
  }
}

export { Oferta };
