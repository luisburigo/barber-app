import React, {useEffect, useState} from "react";
import {Button, Container, Dialog, DialogActions, DialogTitle, Grid, TextField} from "@material-ui/core";
import ClienteService from "../../../services/ClienteService";

export default function Cliente({open, clienteId, close}) {
    const [cliente, setCliente] = useState({
        nome: "",
        email: "",
        dataNascimento: "",
        sexo: "",
        endereco: "",
        senha: "",
    });

    useEffect(() => {
        loadCliente();
    }, []);

    const loadCliente = async () => {
        if (clienteId) {
            const {data} = await ClienteService.find(clienteId);
            setCliente(data);
        }
    }

    const handleSubmit = async () => {
        const res = await ClienteService.create(cliente);
        close(res.data);
    }

    return (
        <Dialog onClose={() => close(false)} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Cadastro de Cliente</DialogTitle>
            <form>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Nome"
                                id="nome"
                                variant="outlined"
                                value={cliente.nome}
                                onChange={event => setCliente({...cliente, nome: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                id="email"
                                variant="outlined"
                                value={cliente.email}
                                onChange={event => setCliente({...cliente, email: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="password"
                                fullWidth
                                label="Senha"
                                id="Senha"
                                variant="outlined"
                                value={cliente.senha}
                                onChange={event => setCliente({...cliente, senha: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                id="data-nascimento"
                                variant="outlined"
                                value={cliente.dataNascimento}
                                onChange={event => setCliente({...cliente, dataNascimento: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Sexo"
                                id="sexo"
                                variant="outlined"
                                value={cliente.sexo}
                                onChange={event => setCliente({...cliente, sexo: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Endereço"
                                id="endereço"
                                variant="outlined" value={cliente.endereco}
                                onChange={event => setCliente({...cliente, endereco: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            Serviços
                        </Grid>
                    </Grid>
                </Container>
            </form>
            <DialogActions>
                <Button onClick={handleSubmit}>Cadastrar</Button>
            </DialogActions>
        </Dialog>
    )
}
