import { DefaultEntity } from "./DefaultEntity";
import { Entity, JoinColumn, ManyToOne, Column, ManyToMany } from "typeorm";
import { Database } from "./Database";
import { JornadaDia } from "./JornadaDia"

@Entity("jornada")
export class Jornada extends DefaultEntity{

  @JoinColumn({name: "fk_jornada_database"})
  @ManyToOne(type => Database)
  datanase: Database;

  @Column({nullable: false})
  nome: string;

  @JoinColumn({name: "fk_jornada_jorndia"})
  @ManyToMany(type => JornadaDia)
  jornadaDia: JornadaDia[];
}