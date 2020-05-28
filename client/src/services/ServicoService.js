import {Service} from "./Service";

class ServicoService extends Service {
  constructor(){
    super('/servicos');
  }
}

export default new ServicoService();