import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {DefaultEntity} from "./DefaultEntity";
import {Database} from "./Database";
import {IsOptional, IsEmail, IsNotEmpty} from "class-validator";
import {Converter} from "@tsed/common";
import {dateTransformer} from "../utils/Transformers";

export enum TipoUsuario {
    ADMIN = "ADMIN",
    USUARIO = "USUARIO"
}

export enum Sexo {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"
}

@Entity({name: "usuarios"})
export class Usuario extends DefaultEntity {

    @JoinColumn({name: "database_id"})
    @ManyToOne(type => Database)
    database: Database;

    @IsNotEmpty()
    @Column({nullable: false})
    nome: string;

    @IsEmail({}, {message: 'Campo e-mail é obrigatorio.'})
    @Column({nullable: false})
    email: string;

    @Column({nullable: false, select: false})
    senha: string;

    @Column('simple-enum', {name: "tipo", enum: TipoUsuario, nullable: false})
    tipo: TipoUsuario;

    @Column("datetime", {name: "data_nascimento", nullable: false, transformer: dateTransformer})
    dataNascimento: Date;

    @Column('simple-enum', {name: "sexo", enum: Sexo, nullable: false})
    sexo: Sexo;

    @Column({nullable: true})
    endereco: string;

}
