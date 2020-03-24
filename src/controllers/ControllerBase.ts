import { Get, PathParams, Post, BodyParams, Delete, Put } from "@tsed/common";
import { DefaultEntity } from "src/entities/DefaultEntity";
import { Repository, getCustomRepository } from "typeorm";

export class ControllerBase<T extends DefaultEntity> {  

    private repository: Repository<T>;

    constructor(repository: Repository<T>){
        //@ts-ignore
        this.repository = getCustomRepository(repository);
    }

    @Get("/")
    public findAll(): Promise<T[]> 
    {
        return this.repository.find();
    } 

    @Get("/:id")
    public async find(@PathParams('id') id): Promise<T> {
        return this.repository.findOne(id);
    }

    @Post('/')
    public async save(@BodyParams() entity: T){
        //@ts-ignore
        return this.repository.save(entity);
    }

    @Delete("/:id")
    public async delete(@PathParams('id') id) {
        return this.repository.delete(id);
    }

    @Put("/:id")
    public async update(@PathParams('id') id, @BodyParams() entity: T) {
        // @ts-ignore
        return this.repository.update(id, entity);
    }

}