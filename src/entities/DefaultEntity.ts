import { Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

export class DefaultEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'created_at'})
    createdAt: Date;

    @Column({name: 'deleted_at'})
    deletedAt: Date;

    @Column({name: 'updated_at'})
    updatedAt: Date;

    // Database..

}