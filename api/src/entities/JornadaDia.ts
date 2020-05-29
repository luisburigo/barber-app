import { DefaultEntity } from "./DefaultEntity";
import { Database } from "./Database";
import { JornadaDiaHorario } from "./JornadaDiaHorario";
import { Entity, JoinColumn, ManyToOne, Column, ManyToMany } from "typeorm";

enum DiasSemana{
  SEGUNDA = "SEGUNDA",
  TERCA = "TERCA",
  QUARTA = "QUARTA",
  QUINTA = "QUINTA",
  SEXTA = "SEXTA",
  SABADO = "SABADO",
  DOMINGO = "DOMINGO",
}

@Entity("jornadadia")
export class JornadaDia extends DefaultEntity{
  
  @JoinColumn({name: "fk_jorndias_database"})
  @ManyToOne(type => Database)
  database: Database;

  @Column('simple-enum', {name: "diasSemana", enum: DiasSemana,nullable: false})
  diasSemana: DiasSemana;

  @JoinColumn({name: "fk_jorndia_jorndhora"})
  @ManyToMany(type => JornadaDiaHorario)
  jornadaDiaHorario: JornadaDiaHorario;
}