import { EntityRepository, Repository } from "typeorm";
import { JornadaDiaHorario } from "../entities/JornadaDiaHorario";

@EntityRepository(JornadaDiaHorario)
export class JornadaDiaHorarioRepository extends Repository<JornadaDiaHorario>{

}