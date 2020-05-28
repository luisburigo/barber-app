import { Service } from "./Service";

class UnidadeService extends Service{
  constructor(){
    super('/unidades');
  }
}

export default new UnidadeService();