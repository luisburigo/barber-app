import { ControllerBase } from "./ControllerBase";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Usuario } from "../entities/Usuario";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/usuarios')
export class UsuarioController extends ControllerBase<Usuario> {

    protected relationConfig: RelationConfig;

    constructor() {
        super(UsuarioRepository);
        this.relationConfig = {
            findAll: ["database"]
        };
    }

}