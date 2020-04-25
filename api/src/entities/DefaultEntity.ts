import {Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import {dateTransformer} from "../utils/Transformers";

export class DefaultEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("datetime", {name: 'created_at', nullable: true, transformer: dateTransformer})
    createdAt: Date;

    @Column("datetime", {name: 'deleted_at', nullable: true, transformer: dateTransformer})
    deletedAt: Date;

    @Column("datetime", {name: 'updated_at', nullable: true, transformer: dateTransformer})
    updatedAt: Date;

    convertToType(entity) {
        Object.assign(this, entity);
        return this;
    }

}
