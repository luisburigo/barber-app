import {ControllerBase} from "./ControllerBase";
import {Controller, Get} from "@tsed/common";
import {RelationConfig} from "src/config/RelationConfig";
import {Funcionario} from "../entities/Funcionario";
import {FuncionarioRepository} from "../repositories/FuncionarioRepository";
import { SexoEnum } from "../entities/enums/sexoEnum";

@Controller('/funcionarios')
export class FuncionarioController extends ControllerBase<Funcionario> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(FuncionarioRepository, Funcionario);
        this.relationConfig = {};
    }

    @Get('/metadata')
    public getMetadata(){
        return{
            sexoEnum: SexoEnum,
        }
    }

}
