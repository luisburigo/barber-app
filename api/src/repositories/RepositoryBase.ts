import {DefaultEntity} from "../entities/DefaultEntity";
import {DeepPartial, EntityManager, FindManyOptions, FindOneOptions, getConnection} from "typeorm";
import {EntityScopeEnum} from "../entities/decorators/EntityScope";
import {ApplicationContext} from "../ApplicationContext";

class RepositoryBase<E extends DefaultEntity> {

    private entityManager: EntityManager;

    constructor(private entity: new () => E) {
        this.entityManager = getConnection().createEntityManager();
    }

    find(options: FindManyOptions<E> = {}) {
        this.whereDatabase(options);
        return this.entityManager.find(this.entity, options)
    }

    findById(id: number, options: FindOneOptions<E>) {
        this.whereDatabase(options);
        return this.entityManager.findOne(this.entity.name, id, options);
    }

    create(entity: DeepPartial<E>): Promise<DeepPartial<E>> {
        this.addDatabaseInObject(entity);
        return this.entityManager.save(this.entity.name, entity);
    }

    private whereDatabase(options: FindOneOptions<E>) {
        // @ts-ignore
        if (this.entity.scope === EntityScopeEnum.DATABASE && ApplicationContext.database) {
            console.log('[Database] with database: ', ApplicationContext.database)
            options.where = options.where || {};
            options.where['database'] = ApplicationContext.database;
        }
    }

    private addDatabaseInObject(entity: DeepPartial<E> = {}) {
        // @ts-ignore
        if (this.entity.scope === EntityScopeEnum.DATABASE && ApplicationContext.database) {
            console.log('[Database] with database: ', ApplicationContext.database);
            // @ts-ignore
            entity.database = ApplicationContext.database;
        }
    }
}

export {RepositoryBase};
