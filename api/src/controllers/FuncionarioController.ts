import {ControllerBase} from "./ControllerBase";
import {Controller} from "@tsed/common";
import {RelationConfig} from "src/config/RelationConfig";
import {Funcionario} from "../entities/Funcionario";
import {FuncionarioRepository} from "../repositories/FuncionarioRepository";

@Controller('/funcionarios')
export class FuncionarioController extends ControllerBase<Funcionario> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(FuncionarioRepository, Funcionario);
        this.relationConfig = {};
    }

}
