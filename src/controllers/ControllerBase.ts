import { Get, PathParams, Post, BodyParams, Delete, Put } from "@tsed/common";
import { DefaultEntity } from "src/entities/DefaultEntity";
import { Repository, getCustomRepository } from "typeorm";
import { RelationConfig } from "src/config/RelationConfig";

export abstract class ControllerBase<T extends DefaultEntity> {

    private repository: Repository<T>;
    protected abstract relationConfig: RelationConfig;

    constructor(repository: new () => Repository<T>) {
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
        return this.repository.save(entity);
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