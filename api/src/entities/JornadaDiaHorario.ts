import { DefaultEntity } from "./DefaultEntity";
import { Database } from "./Database";
import { Entity, JoinColumn, ManyToOne, Column } from "typeorm";

@Entity("jornadadiahorario")
export class JornadaDiaHorario extends DefaultEntity{
 
  @JoinColumn({name: "fk_jorndiahora_database"})
  @ManyToOne(type => Database, {
    cascade: true,
  })
  database: Database;

  @Column({nullable: false})
  nome: string;

  @Column({nullable: false})
  horaInicio: Number;

  @Column({nullable: false})
  intervaloInicio: Number;

  @Column({nullable: false})
  intervaloFim: number;

  @Column({nullable: false})
  horaFim: number;
}