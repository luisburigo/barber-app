import { ControllerBase } from "./ControllerBase";
import { DatabaseRepository } from "../repositories/DatabaseRepository";
import { Database } from "../entities/Database";
import { Controller } from "@tsed/common";
import { RelationConfig } from "src/config/RelationConfig";

@Controller('/databases')
export class DabaseController extends ControllerBase<Database> {
    
    protected relationConfig: RelationConfig;

    constructor() {
        super(DatabaseRepository);
        
        this.relationConfig = {
            findAll: ["ramo"]
        }
    }

}