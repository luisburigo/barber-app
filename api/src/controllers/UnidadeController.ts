import { ControllerBase } from "./ControllerBase";
import { UnidadeRepository } from "../repositories/UnidadeRepository";
import { Unidade } from "../entities/Unidade";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/unidades')
export class UnidadeController extends ControllerBase<Unidade> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(UnidadeRepository, Unidade);
        this.relationConfig = {}
    }

}