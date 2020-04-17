import { DefaultEntity } from "./DefaultEntity";
import { Entity, Column, JoinColumn, ManyToOne, ManyToMany } from "typeorm";
import { Database } from "./Database";
import { JornadaDiaHorario } from "./JornadaDiaHorario";

enum DiasSemana{
    SEGUNDA = "SEGUNDA",
    TERCA = "TERCA",
    QUARTA = "QUARTA",
    QUINTA = "QUINTA",
    SEXTA = "SEXTA",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO",
}

@Entity("jornadadias")
export class JornadaDia extends DefaultEntity{

    @JoinColumn({name: "fk_jornadadias_databse"})
    @ManyToOne(type => Database)
    database: Database;

    @Column('enum', {name: "dias_semana", nullable: false})
    diasSemana: DiasSemana;

    @JoinColumn({name: "fk_jornadadia_j_d_horario"})
    @ManyToMany(type => JornadaDiaHorario)
    jornadaDiaHorario: JornadaDiaHorario[];
}