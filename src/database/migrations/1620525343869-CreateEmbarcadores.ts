import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmbarcadores1620525343869 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "embarcadores",
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
    await queryRunner.dropTable("embarcadores");
  }
}
