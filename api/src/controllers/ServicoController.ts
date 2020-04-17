import { ControllerBase } from "./ControllerBase";
import { ServicoRepository } from "../repositories/ServicoRepository";
import { Servico } from "../entities/Servico";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/servicos')
export class ServicoController extends ControllerBase<Servico> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(ServicoRepository, Servico);
        this.relationConfig = {};
    }

}