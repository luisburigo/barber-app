import { ControllerBase } from "./ControllerBase";
import { JornadaDiaRepository } from "../repositories/JornadaDiaRepository";
import { JornadaDia } from "../entities/JornadaDia";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/jornada/dia')
export class JornadaDiaController extends ControllerBase<JornadaDia> {
    
    protected relationConfig: RelationConfig;

    constructor() {
        super(JornadaDiaRepository, JornadaDia);
        this.relationConfig = {}
    }

}