import {DefaultEntity} from "./DefaultEntity";
import {ManyToOne, JoinColumn, Column, Entity, ManyToMany, JoinTable} from "typeorm";
import {Database} from "./Database";
import {Servico} from "./Servico";
import {SexoEnum} from "./enums/sexoEnum";

@Entity("funcionarios")
export class Funcionario extends DefaultEntity {

    @JoinColumn({name: "database_id"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    email: string;

    @Column('date', {name: "data_nascimento", nullable: false})
    dataNascimento: Date;

    @Column('simple-enum', {name: "sexo", enum: SexoEnum, nullable: false})
    sexo: SexoEnum;

    @Column({nullable: true})
    endereco: string;

    @ManyToMany(type => Servico, {
        cascade: true,
    })
    @JoinTable({name: "funcionarios_servicos"})
    servicos: Servico[];
}
