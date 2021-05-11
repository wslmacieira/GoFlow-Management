import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLances1620595655839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "lances",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_provider",
            type: "uuid",
          },
          {
            name: "id_offer",
            type: "uuid",
          },
          {
            name: "value",
            type: "int",
          },
          {
            name: "amount",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKTransportador",
            referencedTableName: "transportadoras",
            referencedColumnNames: ["id"],
            columnNames: ["id_provider"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKOfertas",
            referencedTableName: "ofertas",
            referencedColumnNames: ["id"],
            columnNames: ["id_offer"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("lances");
  }
}
