import { Entity, Column } from "typeorm";
import { DefaultEntity } from "./DefaultEntity";

@Entity({name: "database"})
export class Database extends DefaultEntity {

    // Ramo..
    // Tipo pessoa.. Pessoa Fisica ou Juridica

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    celular: string;

    @Column({nullable: false})
    email: string;

}