import { DefaultEntity } from "./DefaultEntity";
import { Column, Entity } from "typeorm";

@Entity("ramos")
export class Ramo extends DefaultEntity {

    @Column({nullable: false})
    descricao: string;

}
