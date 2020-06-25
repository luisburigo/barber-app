import {DefaultEntity} from "./DefaultEntity";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Database} from "./Database";
import {EntityScope, EntityScopeEnum} from "./decorators/EntityScope";

@Entity("unidades")
@EntityScope(EntityScopeEnum.DATABASE)
export class Unidade extends DefaultEntity {

    @JoinColumn({name: "database_id"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    endereco: string;

}
