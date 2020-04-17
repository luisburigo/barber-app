import { Get, PathParams, Post, BodyParams, Delete, Put, QueryParams } from "@tsed/common";
import { DefaultEntity } from "src/entities/DefaultEntity";
import { Repository, getCustomRepository } from "typeorm";
import { RelationConfig } from "src/config/RelationConfig";
import { validate } from "class-validator";
import {BadRequest} from "ts-httpexceptions";
import { ResultContent } from "../utils/ResultContent";

export abstract class ControllerBase<T extends DefaultEntity> {

    private repository: Repository<T>;
    protected abstract relationConfig: RelationConfig;

    constructor(repository: new () => Repository<T>, private entity: new () => T) {
        this.repository = getCustomRepository(repository);
    }

    @Get("/")
    public findAll(): Promise<T[]> {  
        return this.repository.find({ relations: this.relationConfig.findAll || [] });
    }

    @Get("/:id")
    public async find(@PathParams('id') id: number): Promise<T> {
        return this.repository.findOne(id, {relations: this.relationConfig.find || []});
    }

    @Post('/')
    public async save(@BodyParams() entity) {
        entity = new this.entity().convertToType(entity);
        const validation = await validate(entity);

        if(!validation.length) {
            const entitySaved = await this.repository.save(entity);
            return ResultContent.of()
                    .withMessage("Salvo com sucesso!")
                    .withContent(entitySaved)
                    .build();   
        }

        throw new BadRequest('Verifique os valores');
    }

    @Delete("/:id")
    public async delete(@PathParams('id') id: number) {
        return this.repository.delete(id);
    }

    @Put("/:id")
    public async update(@PathParams('id') id: number, @BodyParams() entity) {
        return this.repository.update(id, entity);
    }

}