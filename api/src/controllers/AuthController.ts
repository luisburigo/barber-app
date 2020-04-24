import {BodyParams, Controller, Post, $log, Req} from '@tsed/common';
import {ResultContent} from '../utils/ResultContent';
import {UsuarioRepository} from '../repositories/UsuarioRepository';
import {BadRequest} from "ts-httpexceptions"
import AuthService from '../services/AuthService';

type AuthLogin = {
    email: string
    senha: string
};

@Controller("/auth")
class AuthController {

    constructor(
        private usuarioRepository: UsuarioRepository,
        private authService: AuthService,
    ) {
    }

    @Post("/login")
    public async login(@BodyParams() model: AuthLogin, @Req() req: Req) {
        const usuario = await this.usuarioRepository.login(model.email, model.senha);

        if (!usuario) {
            throw new BadRequest("Credentials invalid.");
        }

        const token = this.authService.gerarToken(usuario.id);

        return ResultContent.of()
            .withMessage("Logado com sucesso!")
            .withContent({token})
            .build();
    }

}

export default AuthController;
