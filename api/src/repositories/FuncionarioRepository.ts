import { EntityRepository, Repository } from "typeorm";
import { Funcionario } from "../entities/Funcionario";

@EntityRepository(Funcionario)
export class FuncionarioRepository extends Repository<Funcionario>{

}