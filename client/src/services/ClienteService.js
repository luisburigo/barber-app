import {Service} from "./Service";

class ClienteService extends Service {

    constructor() {
        super('/clientes');
    }

}

export default new ClienteService();
