import {Service} from "./Service";

class HorarioService extends Service {
  constructor(){
    super('/horarios');
  }
}

export default new HorarioService();