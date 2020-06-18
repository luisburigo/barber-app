import {ControllerBase} from "./ControllerBase";
import {UsuarioRepository} from "../repositories/UsuarioRepository";
import {Usuario} from "../entities/Usuario";
import {Controller, Get, UseBefore} from "@tsed/common";
import {RelationConfig} from "src/config/RelationConfig";
import {AuthMiddleware} from '../middlewares/AuthMiddleware';
import {ApplicationContext} from "../ApplicationContext";

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

    @Get('/info')
    public getUserInfo() {
        const {usuario} = ApplicationContext;
        const {nome, email, database} = usuario;
        const {descricao, imagem} = database;
        return {nome, email, database: {descricao, imagem}}
    }

}
