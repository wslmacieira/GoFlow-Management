import { Column, Entity } from "typeorm";

import { Base } from "./Base";

@Entity("embarcadores")
class Embarcador extends Base {
  @Column()
  name: string;

  @Column()
  doc: string;

  @Column()
  about: string;

  @Column()
  active: boolean;

  @Column()
  site: string;

  constructor() {
    super();
  }
}

export { Embarcador };
