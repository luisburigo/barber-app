import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"
import {AuthContainer, AuthLogo} from "./style";
import {Button, Card, CardActions, CardContent, TextField} from "@material-ui/core";
import AuthService from "../../services/AuthService";

export default function Auth() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (AuthService.hasToken) {
            toApp()
        }
    });

    const toApp = () => history.push("/app");

    async function handleSubmit(event) {
        event.preventDefault();
        await AuthService.login(email, senha);
        toApp()
    }

    return (
        <AuthContainer>
            <Card style={{maxWidth: "400px", width: '100%'}} elevation={5}>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <AuthLogo/>
                    </CardContent>
                    <CardContent style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField
                            style={{marginBottom: '15px'}}
                            label="E-mail"
                            id="email"
                            variant="outlined"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        <TextField
                            type="password"
                            label="Senha"
                            id="senha"
                            variant="outlined"
                            value={senha}
                            onChange={event => setSenha(event.target.value)}
                        />
                    </CardContent>
                    <CardActions style={{display: "flex", justifyContent: "center"}}>
                        <Button type="submit" size="large" variant="contained" color="primary">
                            Entrar
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </AuthContainer>
    )
}
