import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {DefaultEntity} from "./DefaultEntity";
import {Database} from "./Database";
import {IsEmail, IsNotEmpty} from "class-validator";
import {dateTransformer} from "../utils/Transformers";
import {SexoEnum} from "./enums/sexoEnum";

export enum TipoUsuario {
    ADMIN = "ADMIN",
    USUARIO = "USUARIO"
}

@Entity({name: "usuarios"})
export class Usuario extends DefaultEntity {

    @JoinColumn({name: "fk_usuarios_database"})
    @ManyToOne(type => Database, {
        cascade: true,
    })
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

    @Column('simple-enum', {name: "sexo", enum: SexoEnum, nullable: false})
    sexo: SexoEnum;

    @Column({nullable: true})
    endereco: string;

}
