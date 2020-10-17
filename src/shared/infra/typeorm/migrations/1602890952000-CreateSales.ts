import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateSales1602890952000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sales',
                columns: [
                    {
                        name: 'order',
                        type: 'integer',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'product_id',
                        type: 'integer',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'quantity',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'sale_price',
                        type: 'decimal',
                        isNullable: false,
                    },
                    {
                        name: 'customer_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'seller_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'timestamp',
                        isNullable: false,
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

        await queryRunner.createForeignKey(
            'sales',
            new TableForeignKey({
                name: 'SalesProduct',
                columnNames: ['product_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'sales',
            new TableForeignKey({
                name: 'SalesCustomer',
                columnNames: ['customer_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'partners',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'sales',
            new TableForeignKey({
                name: 'SalesSeller',
                columnNames: ['seller_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'partners',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('products', 'SalesProduct');
        await queryRunner.dropForeignKey('partners', 'SalesCustomer');
        await queryRunner.dropForeignKey('partners', 'SalesSeller');
        await queryRunner.dropTable('sales');
    }

}
