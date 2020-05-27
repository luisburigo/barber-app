import {UsuarioRepository} from "../repositories/UsuarioRepository";
import {BodyParams, Controller, Delete, Get, PathParams, Post, UseBefore} from "@tsed/common";
import {AuthMiddleware} from '../middlewares/AuthMiddleware';
import {TipoUsuario, Usuario} from "../entities/Usuario";
import {ApplicationContext} from "../ApplicationContext";
import {FindConditions, IsNull} from "typeorm";
import {ResultContent} from "../utils/ResultContent";

@UseBefore(AuthMiddleware)
@Controller('/clientes')
export class ClienteController {

    constructor(private usuarioRepository: UsuarioRepository) {
    }

    @Get("/")
    public async findAll(): Promise<Usuario[]> {
        const condition: FindConditions<Usuario> = {
            deletedAt: IsNull(),
            database: ApplicationContext.database,
            tipo: TipoUsuario.USUARIO,
        };
        return await this.usuarioRepository.find({where: condition});
    }

    @Get("/:id")
    public async find(@PathParams('id') id: number): Promise<Usuario> {
        const condition: FindConditions<Usuario> = {
            deletedAt: IsNull(),
            database: ApplicationContext.database,
            tipo: TipoUsuario.USUARIO,
            id,
        };
        return await this.usuarioRepository.findOne({where: condition});
    }

    @Post("/")
    public async create(@BodyParams() params: Usuario) {
        params.tipo = TipoUsuario.USUARIO;
        params.database = ApplicationContext.database;

        const usuario = await this.usuarioRepository.save(params);

        return ResultContent.of()
            .withContent(usuario)
            .withMessage("Cliente salvo com sucesso!")
    }

    @Delete("/:id")
    public async delete(@PathParams('id') id: number) {
        let usuario = await this.usuarioRepository.findOne(id);
        usuario.deletedAt = new Date();
        usuario = await this.usuarioRepository.save(usuario);

        return ResultContent.of()
            .withMessage("Cliente deletado com sucesso!")
            .withContent(usuario);
    }

}
