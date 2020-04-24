import {DefaultEntity} from "./DefaultEntity";
import {ManyToOne, JoinColumn, Column, Entity, ManyToMany, JoinTable} from "typeorm";
import {Database} from "./Database";
import {Servico} from "./Servico";

enum Sexo {
    MASCULINO = "MASCULINO",
    USUARIO = "USUARIO"
}

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

    @Column('enum', {name: "sexo", enum: Sexo, nullable: false})
    sexo: Sexo;

    @Column({nullable: true})
    endereco: string;

    @JoinColumn({name: "servico_id"})
    @ManyToOne(type => Servico)
    servicos: Servico[];

}
