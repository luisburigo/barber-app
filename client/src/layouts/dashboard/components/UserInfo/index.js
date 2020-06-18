import React, {useContext} from "react";
import AuthContext from "../../../../contexts/AuthContext";
import {CircularProgress} from "@material-ui/core";
import useStyles from "./styles";

export default function UserInfo() {
    const {nome, email, database, isLoading} = useContext(AuthContext);

    const styles = useStyles();

    return (
        <div className={styles.container}>
            {
                isLoading
                    ? (<CircularProgress className={styles.image}/>)
                    : (<img className={styles.image} src={database.imagem} alt=""/>)
            }
            <p className={styles.descriptionDatabase}>{database.descricao}</p>
            <p className={styles.email}>{email}</p>
            <p className={styles.namePeople}>{nome}</p>
        </div>
    )
}
