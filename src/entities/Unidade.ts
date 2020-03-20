import { DefaultEntity } from "./DefaultEntity";
import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Database } from "./Database";

@Entity("unidades")
class Unidade extends DefaultEntity {

    @JoinColumn({name: "fk_unidade_database"})
    @ManyToOne(type => Database)
    ramo: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    endereco: string;



}