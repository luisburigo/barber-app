import { DefaultEntity } from "./DefaultEntity";
import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Database } from "./Database";

@Entity("unidades")
export class Unidade extends DefaultEntity {

    @JoinColumn({name: "database_id"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    endereco: string;

}
