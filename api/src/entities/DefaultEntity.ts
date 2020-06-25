import {Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import {dateTransformer} from "../utils/Transformers";
import {Database} from "./Database";
import {EntityScopeEnum} from "./decorators/EntityScope";

export class DefaultEntity extends BaseEntity {

    static scope = EntityScopeEnum.GLOBAL;

    @PrimaryGeneratedColumn()
    id: number;

    @Column("datetime", {name: 'created_at', nullable: true, transformer: dateTransformer})
    createdAt: Date;

    @Column("datetime", {name: 'deleted_at', nullable: true, transformer: dateTransformer})
    deletedAt: Date;

    @Column("datetime", {name: 'updated_at', nullable: true, transformer: dateTransformer})
    updatedAt: Date;

    database?: Database;

    convertToType(entity) {
        Object.assign(this, entity);
        return this;
    }

}
