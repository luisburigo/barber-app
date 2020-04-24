import { ControllerBase } from "./ControllerBase";
import { RamoRepository } from "../repositories/RamoRepository";
import { Ramo } from "../entities/Ramo";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/ramos')
export class RamoController extends ControllerBase<Ramo> {

    protected relationConfig: RelationConfig;

    constructor(){
        super(RamoRepository, Ramo);
        this.relationConfig = {};
    }

}
