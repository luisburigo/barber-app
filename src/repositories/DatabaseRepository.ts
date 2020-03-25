import { EntityRepository, Repository } from "typeorm";
import { Database } from "../entities/Database";

@EntityRepository(Database)
export class DatabaseRepository extends Repository<Database> {

}