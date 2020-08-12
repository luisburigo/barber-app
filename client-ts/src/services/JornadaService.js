import {Service} from "./Service";

class JornadaService extends Service{
  constructor(){
    super('/jornadas');
  }
}

export default new JornadaService();