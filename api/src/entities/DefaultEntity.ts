import { Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export class DefaultEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'created_at', nullable: true })
    createdAt: Date;

    @Column({ name: 'deleted_at', nullable: true })
    deletedAt: Date;

    @Column({ name: 'updated_at', nullable: true })
    updatedAt: Date;
    
    convertToType(entity) {
        Object.assign(this, entity);
        return this;
    }
    
}
