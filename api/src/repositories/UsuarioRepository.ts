import {EntityRepository, Repository} from "typeorm";
import {Usuario} from "../entities/Usuario";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {

    public async login(email: string, senha: string): Promise<Usuario> {
        const usuario = await this.findOne({where: {email, senha}});

        if (!usuario) {
            // @Todo implementer ApplicationError
        }

        return usuario;
    }

}
