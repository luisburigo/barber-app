import React from "react";
import {CardContent, Container, Dialog, DialogTitle, Grid, TextField} from "@material-ui/core";

export default function Funcionarios({onclose, open}) {

    const handleClose = () => onclose();

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
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                id="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                id="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Sexo"
                                id="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Endereço"
                                id="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            Serviços
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Dialog>
    )
}
