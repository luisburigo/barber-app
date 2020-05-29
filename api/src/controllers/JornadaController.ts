import { ControllerBase } from "./ControllerBase";
import { JornadaRepository } from "../repositories/JornadaRepository";
import { Jornada } from "../entities/Jornada";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/jornadas')
export class JornadaController extends ControllerBase<Jornada>{
  
  protected relationConfig: RelationConfig;

  constructor(){
    super(JornadaRepository, Jornada)
    this.relationConfig ={};
  }

}
