import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { DefaultEntity } from "./DefaultEntity";

@Entity({name: "usuario"})
export class Usuario extends DefaultEntity {

    // Empresa..
    // Horarios..

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false, select: false})
    senha: string;

    @Column({name: "data_nascimento", nullable: false} )
    dataNascimento: Date;

    @Column({nullable: false})
    sexo: string;

    @Column()
    endereco: string;

}