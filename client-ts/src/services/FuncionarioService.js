import {Service} from "./Service";
import { api } from "../api/api";

class FuncionarioService extends Service {

    constructor() {
        super('/funcionarios');
    }

    fillEnumGenre(){
        return api.get(`${this.url}/metadata`);
    }

}

export default new FuncionarioService();
