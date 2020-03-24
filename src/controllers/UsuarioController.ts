import { ControllerBase } from "./ControllerBase";
import {UsuarioRepository} from "../repositories/UsuarioRepository";
import { Usuario } from "../entities/Usuario";
import { Controller } from "@tsed/common";

@Controller('/usuario')
export class UsuarioController extends ControllerBase<Usuario> {
   
    constructor(){
        super(new UsuarioRepository());
    }

}