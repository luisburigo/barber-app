import { DefaultEntity } from "./DefaultEntity";
import { Column, ManyToOne, JoinColumn, Entity } from "typeorm";
import { Database } from "./Database";
import { JornadaDia } from "./JornadaDia";

@Entity("jornada")
export class Jornada extends DefaultEntity{
    
    @JoinColumn({name: "fk_jornada_database"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @JoinColumn({name : "fk_jornada_jornadadia"})
    @ManyToOne(type => JornadaDia)
    jornadaDia : JornadaDia[];
}