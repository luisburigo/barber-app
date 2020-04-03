import { DefaultEntity } from "./DefaultEntity";
import { ManyToOne, JoinColumn, Column, Entity, ManyToMany } from "typeorm";
import { Database } from "./Database";
import { Servico } from "./Servico";
import { Jornada } from "./Jornada";


enum Sexo{
    MASCULINO = "MASCULINO",
    USUARIO = "USUARIO"
}

@Entity("funcionarios")
export class Funcionario extends DefaultEntity{

    @JoinColumn({name: "fk_funcionario_database"})
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

    @JoinColumn({name: "fk_funcionario_servicos"})
    @ManyToMany(type => Servico)
    servicos: Servico[];

    @JoinColumn({name: "fk_funcionario_jornada"})
    @ManyToOne(type => Jornada)
    jornada: Jornada;
}