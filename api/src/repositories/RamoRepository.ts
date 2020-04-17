import {EntityRepository, Repository} from "typeorm";
import { Ramo } from "../entities/Ramo";

@EntityRepository(Ramo)
export class RamoRepository extends Repository<Ramo> {

}