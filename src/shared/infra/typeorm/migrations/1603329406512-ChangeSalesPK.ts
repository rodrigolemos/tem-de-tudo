import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class ChangeSalesPK1603329406512 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('sales', 'customer_id', new TableColumn({
            name: 'customer_id',
            type: 'integer',
            isPrimary: true,
            isNullable: false,
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
