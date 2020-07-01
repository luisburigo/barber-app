import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {Unidade} from "../../entities/Unidade";

const unidade: Partial<Unidade> = {
    nome: "Matriz - Admin",
    endereco: "teste"
}

export class UnidadeSeeder1590105531112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const unidadeRepository = getRepository(Unidade);
        await unidadeRepository.save({...unidade, database: {id: 1}});

        console.log("[Migration] Unidade seed runned");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const unidadeRepository = getRepository(Unidade);
        await unidadeRepository.delete(unidade);
    }

}
