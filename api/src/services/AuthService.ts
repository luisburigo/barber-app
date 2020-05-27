import {Service} from '@tsed/di';
import {Usuario} from '../entities/Usuario';
import * as JWT from "jsonwebtoken"
import {UsuarioRepository} from '../repositories/UsuarioRepository';

const {TOKEN_SECRET} = process.env;

type TokenPayload = {
    id: number
}

@Service()
class AuthService {

    constructor(private usuarioRepository: UsuarioRepository) {
    }

    public gerarToken(userId: number) {
        return JWT.sign({id: userId}, TOKEN_SECRET);
    }

    public async decodificarToken(token: string): Promise<Usuario> {
        const payload = <TokenPayload>JWT.verify(token, TOKEN_SECRET);
        return await this.usuarioRepository.findOne(payload.id, {relations: ["database"]});
    }
}

export default AuthService;
