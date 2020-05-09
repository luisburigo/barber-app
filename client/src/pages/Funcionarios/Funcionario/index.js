import React, {useState, useEffect} from "react";
import {CardContent, Container, Dialog, DialogTitle, Grid, TextField, DialogActions,Button} from "@material-ui/core";
import FuncionarioService from "../../../services/FuncionarioService";

export default function Funcionarios({handleClose, open, funcionarioId}) {
    const [funcionario, setFuncionario] = useState({});

    useEffect(async () => {
        if(funcionarioId) {
            const {data} = await FuncionarioService.find(funcionarioId);
            setFuncionario(data);
        }

        return () => console.log('asdasd')
    }, []);

    const handleSubmit = async () => {
        await FuncionarioService.create(funcionario)
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Cadastro de Funcionario</DialogTitle>
            <form>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Nome"
                                id="email"
                                variant="outlined"
                                value={funcionario.nome}
                                onChange={event => setFuncionario({...funcionario, nome: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                id="email"
                                variant="outlined"
                                value={funcionario.email}
                                onChange={event => setFuncionario({...funcionario, email: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                id="email"
                                variant="outlined"
                                value={funcionario.dataNascimento}
                                onChange={event => setFuncionario({...funcionario, dataNascimento: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Sexo"
                                id="email"
                                variant="outlined"
                                value={funcionario.sexo}
                                onChange={event => setFuncionario({...funcionario, sexo: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Endereço"
                                id="email"
                                variant="outlined"value={funcionario.endereco}
                                onChange={event => setFuncionario({...funcionario, endereco: event.target.value})}
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
