import {DefaultEntity} from "./DefaultEntity";
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne} from "typeorm";
import {Usuario} from "./Usuario";
import {Servico} from "./Servico";
import {Funcionario} from "./Funcionario";
import {Ramo} from './Ramo';
import {Database} from './Database';

@Entity("horarios")
export class Horario extends DefaultEntity {

    @JoinColumn({name: "fk_horarios_database"})
    @ManyToOne(type => Database, {
        cascade: true,
    })
    database: Database;

    @JoinColumn({name: "ramo_id"})
    @ManyToOne(type =>Ramo)
    ramo: Ramo;

    @JoinColumn({name: "usuario_id"})
    @ManyToOne(type => Horario)
    usuario: Usuario;

    @Column({name: 'data_hora'})
    dataHora: Date;

    @JoinColumn({name: "funcionario_id"})
    @ManyToOne(type => Horario)
    funcionario: Funcionario;

    @ManyToMany(type => Servico)
    @JoinTable({name: "horarios_servicos"})
    servicos: Servico[];

}
