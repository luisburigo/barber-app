import { DefaultEntity } from "./DefaultEntity";
import { JoinColumn, ManyToOne, Column } from "typeorm";
import { Database } from "./Database";

export class JornadaDiaHorario extends DefaultEntity{
    @JoinColumn({name: "fk_j_d_horario_database"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    HoraInicio: number;

    @Column({nullable: false})
    IntervaloInicio: number;

    @Column({nullable: false})
    IntervaloFim: number;

    @Column({nullable: false})
    HoraFim: number;
}