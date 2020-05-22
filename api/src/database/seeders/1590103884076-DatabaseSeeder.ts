import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {Database, TipoInscricao} from "../../entities/Database";
import {Usuario} from "../../entities/Usuario";

const databaseAdmin: Partial<Database> = {
    tipoInscricao: TipoInscricao.CPF,
    inscricao: '111.111.111-11',
    ramo: null,
    descricao: 'Database Admin'
};

export class DatabaseSeeder1590103884076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const databaseRepository = getRepository(Database);
        const databaseCreated = await databaseRepository.save(databaseAdmin);

        const usuarioRepository = getRepository(Usuario);
        await usuarioRepository.update({nome: "Admin"}, {database: databaseCreated});

        console.log("[Migration] Database seed runned");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
