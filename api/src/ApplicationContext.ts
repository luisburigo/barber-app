import {Usuario} from './entities/Usuario';
import {Database} from "./entities/Database";

class ApplicationContext {
    static usuario: Usuario;
    static database: Database;
}

export {ApplicationContext}
