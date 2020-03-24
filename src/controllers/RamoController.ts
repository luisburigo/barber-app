import { ControllerBase } from "./ControllerBase";
import { RamoRepository } from "../repositories/RamoRepository";
import { Ramo } from "../entities/Ramo";
import { Controller } from "@tsed/common";

@Controller('/ramo')
export class RamoController extends ControllerBase<Ramo> {
   
    constructor(){
        super(new RamoRepository());
    }

}