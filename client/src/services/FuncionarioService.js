import {Service} from "./Service";

class FuncionarioService extends Service {

    constructor() {
        super('/funcionarios');
    }

}

export default new FuncionarioService();
