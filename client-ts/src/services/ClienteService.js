import {Service} from "./Service";
import { api } from "../api/api";

class ClienteService extends Service {

    constructor() {
        super('/clientes');
    }

    fillEnumGenre(){
        return api.get(`${this.url}/metadata`);
    }

}

export default new ClienteService();
