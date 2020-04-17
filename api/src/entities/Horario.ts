import { DefaultEntity } from "./DefaultEntity";
import { ManyToOne, JoinColumn, Column, OneToMany, Entity, ManyToMany } from "typeorm";
import { Usuario } from "./Usuario";
import { Servico } from "./Servico";
import { Database } from "./Database";
import { Funcionario } from "./Funcionario";

@Entity("horarios")
export class Horario extends DefaultEntity {

    @JoinColumn({name: "fk_horario_database"})
    @ManyToOne(type => Database)
    ramo: Database;

    @JoinColumn({name: "fk_horario_usuario"})
    @ManyToOne(type => Horario)
    usuario: Usuario;

    @Column({name: 'data_hora'})
    dataHora: Date;

    @JoinColumn({name: "fk_horario_funcionario"})
    @ManyToOne(type => Horario)
    funcionario: Funcionario;

    @JoinColumn({name: "fk_horario_servicos"})
    @ManyToMany(type => Servico)
    servicos: Servico[];
    
}