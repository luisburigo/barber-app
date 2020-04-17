import { ControllerBase } from "./ControllerBase";
import { JornadaDiaHorarioRepository } from "../repositories/JornadaDiaHorarioRepository";
import { JornadaDiaHorario } from "../entities/JornadaDiaHorario";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/jornada/dia')
export class JornadaDiaHorarioController extends ControllerBase<JornadaDiaHorario> {
    
    protected relationConfig: RelationConfig;

    constructor() {
        super(JornadaDiaHorarioRepository, JornadaDiaHorario);
        this.relationConfig = {}
    }

}