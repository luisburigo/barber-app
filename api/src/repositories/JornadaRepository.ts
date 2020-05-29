 import { EntityRepository, Repository } from "typeorm";
 import { Jornada } from "../entities/Jornada";

 @EntityRepository(Jornada)
 export class JornadaRepository extends Repository<Jornada>{
   
 }