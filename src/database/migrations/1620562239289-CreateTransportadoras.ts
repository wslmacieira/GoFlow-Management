import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransportadoras1620562239289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transportadoras",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "doc",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "about",
            type: "varchar",
          },
          {
            name: "active",
            type: "boolean",
          },
          {
            name: "site",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transportadoras");
  }
}
