import { EntityRepository, Repository } from "typeorm";
import { JornadaDia } from "../entities/JornadaDia";

@EntityRepository(JornadaDia)
export class JornadaDiaRepository extends Repository<JornadaDia>{

}