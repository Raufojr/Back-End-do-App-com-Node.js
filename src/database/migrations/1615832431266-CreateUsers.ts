import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1615832431266 implements MigrationInterface {
     public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.createTable(

               new Table({
                    name: 'users',
                    columns: [
                         {
                              name: 'id',
                              type: 'varchar',
                              isPrimary: true,
                              generationStrategy: 'uuid',
                              default: 'uuid_generate_v4()',
                         },
                         {
                              name: 'name',
                              type: 'varchar',

                         },
                         {
                              name: 'email',
                              type: 'varchar',
                              isUnique: true,
                         },
                         {
                              name: 'password',
                              type: 'varchar',
                         },

                         {
                              name: 'created_at',
                              type: 'timestamp',
                              default: 'now()',

                         }, {
                              name: 'updated-at',
                              type: 'timestamp',
                              default: 'now()',

                         },
                         //yarn typeorm migration:run
                         //yarn typeorm migrations:create -n CreateUsers  = cria uma table na pasta migration em database
                         //sudo docker start 1de05c5f2592  -> inicia o docker
                         //yarn typeorm migration:revert  -para reverter a ultima ação na tabela

                    ],
               }),
          );
     }

     public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropTable('users');

     }

}

