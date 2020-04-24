import {ControllerBase} from "./ControllerBase";
import {UsuarioRepository} from "../repositories/UsuarioRepository";
import {Usuario} from "../entities/Usuario";
import {Controller, UseBefore} from "@tsed/common";
import {RelationConfig} from "src/config/RelationConfig";
import {AuthMiddleware} from '../middlewares/AuthMiddleware';

@UseBefore(AuthMiddleware)
@Controller('/usuarios')
export class UsuarioController extends ControllerBase<Usuario> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(UsuarioRepository, Usuario);
        this.relationConfig = {
            findAll: ["database"]
        };
    }

}
