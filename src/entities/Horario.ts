import { DefaultEntity } from "./DefaultEntity";
import { ManyToOne, JoinColumn, Column, OneToMany, Entity } from "typeorm";
import { Usuario } from "./Usuario";

@Entity("horario")
export class Horario extends DefaultEntity {

    @JoinColumn({name: "fk_horario_usuario"})
    @ManyToOne(type => Horario)
    usuario: Usuario;

    @Column({name: 'data_hora'})
    dataHora: Date;

    // Funcionario..
    // Servico..
    
}