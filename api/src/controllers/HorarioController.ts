import { ControllerBase } from "./ControllerBase";
import { HorarioRepository } from "../repositories/HorarioRepository";
import { Horario } from "../entities/Horario";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/horarios')
export class HorarioController extends ControllerBase<Horario> {
    
    protected relationConfig: RelationConfig;

    constructor() {
        super(HorarioRepository, Horario);
        this.relationConfig = {}
    }

}