import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1602799380337 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'classification',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'cost_price',
                        type: 'decimal',
                        isNullable: false,
                    },
                    {
                        name: 'sale_price',
                        type: 'decimal',
                        isNullable: false,
                    },
                    {
                        name: 'stock_quantity',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'store_quantity',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                        isNullable: false,
                        default: 'A',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
