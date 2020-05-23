import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import {Ramo} from "../../entities/Ramo";
import {Database} from "../../entities/Database";

const ramos: Partial<Ramo>[] = [
    {descricao: "Cabelereira"},
    {descricao: "Tatuador"},
    {descricao: "Manicure"},
];

export class RamoSeeder1590105137564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const ramoRepository = getRepository(Ramo);

        for (let ramo of ramos) {
            await ramoRepository.save(ramo);
        }

        const databaseRepository = getRepository(Database);
        await databaseRepository.update(1, {ramo: {id: 1}});

        console.log("[Migration] Ramo seed runned");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
