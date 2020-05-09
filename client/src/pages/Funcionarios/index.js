import React, {useEffect, useState} from "react";
import {
    Container,
    Grid,
    FormControl,
    InputLabel,
    Input,
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from "@material-ui/core";
import FuncionarioService from "../../services/FuncionarioService";
import Funcionario from "./Funcionario";

export default function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionario, setFuncionario] = useState(null);
    const [dialog, setDialog] = useState(false);

    useEffect(() => {
        loadFuncionarios();
    }, []);

    const openDialog = (funcionario = null) => {
        setDialog(true);
        setFuncionario(funcionario);
    };

    const deleteUser = async (id) => {
        await FuncionarioService.delete(id);
        loadFuncionarios();
    };

    const renderTable = () => {
        if (funcionarios.length) {
            return <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Data Nascimento</TableCell>
                        <TableCell>Sexo</TableCell>
                        <TableCell align="right">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {funcionarios.map((funcionario) => (
                        <TableRow>
                            <TableCell align="left">{funcionario.nome}</TableCell>
                            <TableCell align="left">{funcionario.email}</TableCell>
                            <TableCell align="left">{funcionario.dataNascimento}</TableCell>
                            <TableCell align="left">{funcionario.sexo}</TableCell>
                            <TableCell align="right">
                                <Button color="primary" variant="outlined" onClick={() =>  openDialog(funcionario)}>
                                    Editar
                                </Button>
                                <Button color="red" variant="outlined" onClick={() => deleteUser(funcionario.id)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        }

        return (<Typography variant="subtitle1"> Nenhum funcionario encontrado. </Typography>)
    };

    const loadFuncionarios = async () => {
        const {data} = await FuncionarioService.findAll();
        setFuncionarios(data);
    }

    const onClose = () => {
        setDialog(false);
        loadFuncionarios();
    }

    return (
        <Container style={{paddingTop: '30px'}}>
            { /* @Todo verificar useEffect */ }
            <Funcionario open={dialog} handleClose={() => onClose()} funcionarioId={funcionario && funcionario.id}/>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="pesquisa">Pesquisar</InputLabel>
                        <Input id="pesquisa"/>
                    </FormControl>
                </Grid>
                <Grid item xs={6} style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end"}}>
                    <Button variant="contained" color="primary" onClick={openDialog}>Cadastrar</Button>
                </Grid>
                <Grid item xs={12}>
                    {renderTable()}
                </Grid>
            </Grid>
        </Container>
    )
}
