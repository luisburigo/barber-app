import { EntityRepository, Repository } from "typeorm";
import { Horario } from "../entities/Horario";

@EntityRepository(Horario)
export class HorarioRepository extends Repository<Horario> {

}