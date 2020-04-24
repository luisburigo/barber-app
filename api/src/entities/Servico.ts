import { DefaultEntity } from "./DefaultEntity";
import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { Database } from "./Database";

@Entity("servicos")
export class Servico extends DefaultEntity{

    @JoinColumn({name: "database_id"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    preco: number;

    @Column({nullable: false})
    tempo: number; // Valor do tempo em segundos

}
