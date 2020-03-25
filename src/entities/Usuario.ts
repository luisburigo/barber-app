import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {DefaultEntity} from "./DefaultEntity";
import { Database } from "./Database";

enum TipoUsuario {
    ADMIN = "ADMIN",
    USUARIO = "USUARIO"
}

enum Sexo {
    MASCULINO = "MASCULINO",
    FEMININO = "FEMININO"  
}

@Entity({name: "usuarios"})
export class Usuario extends DefaultEntity {

    @JoinColumn({name: "fk_usuario_database"})
    @ManyToOne(type => Database)
    database: Database;

    @Column({nullable: false})
    nome: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false, select: false})
    senha: string;

    @Column('enum', {name: "tipo", enum: TipoUsuario, nullable: false})
    tipo: TipoUsuario;
    
    @Column("date", {name: "data_nascimento", nullable: false} )
    dataNascimento: Date;

    @Column('enum', {name: "sexo", enum: Sexo, nullable: false})
    sexo: Sexo;

    @Column({ nullable: true })
    endereco: string;

}
