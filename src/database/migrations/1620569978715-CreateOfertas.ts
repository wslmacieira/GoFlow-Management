import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOfertas1620569978715 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ofertas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_customer",
            type: "uuid",
          },
          {
            name: "from",
            type: "varchar",
          },
          {
            name: "to",
            type: "varchar",
          },
          {
            name: "initial_value",
            type: "int",
          },
          {
            name: "amount",
            type: "int",
          },
          {
            name: "amount_type",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKEmbarcador",
            referencedTableName: "embarcadores",
            referencedColumnNames: ["id"],
            columnNames: ["id_customer"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ofertas");
  }
}
