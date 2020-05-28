import {Service} from "./Service";
import {api} from "../api/api";

class UsuarioService extends Service {
    constructor() {
        super("usuarios");
    }

    getInfo() {
        return api.get(`${this.url}/info`);
    }
}

export default new UsuarioService();
