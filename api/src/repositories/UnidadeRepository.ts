import { EntityRepository, Repository } from "typeorm";
import { Unidade } from "../entities/Unidade";

@EntityRepository(Unidade)
export class UnidadeRepository extends Repository<Unidade>{

}