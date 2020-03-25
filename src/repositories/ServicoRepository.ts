import { EntityRepository, Repository } from "typeorm";
import { Servico } from "../entities/Servico";

@EntityRepository(Servico)
export class ServicoRepository extends Repository<Servico> {

}