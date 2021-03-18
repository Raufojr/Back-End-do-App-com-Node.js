import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export default class AlterProviderFiledToProviderId1615843939620 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropColumn('users', 'updated-at');

          await queryRunner.addColumn(
               'users',
               new TableColumn({
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',

               }),
          );
          /*await queryRunner.createForeignKey('users', new TableForeignKey({
               name: 'AppointmentsProvider',
               columnNames: [''],
               referencedColumnNames: ['id'],
               referencedTableName: 'users',
               onDelete: 'SET NULL',
               onUpdate: 'CASCADE',
          }),
          );*/
     }

     public async down(queryRunner: QueryRunner): Promise<void> {
          //await queryRunner.dropForeignKey('appointments', 'AppointmentProvider');

          await queryRunner.dropColumn('users', 'updated_at');

          await queryRunner.addColumn(
               'users',
               new TableColumn({

                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',

               }),
          );
     }

}
//yarn typeorm migration:create -n AlterProviderFiledToProviderId  -> para criar um novo arquivo
