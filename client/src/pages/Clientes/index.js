import React, {useEffect, useState} from "react";
import {
    Button,
    Container,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import Cliente from "./Cliente";
import {DialogService} from "../../services/DialogService";
import ClienteService from "../../services/ClienteService";
import { DateUtils } from "../../utils/DateUtils";

export default function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        loadClientes();
    }, []);

    const openDialog = async (cliente = null) => {
        const res = await DialogService.open(Cliente, {clienteId: cliente.id});

        if (res) {
            loadClientes();
        }
    };

    const deleteCliente = async (id) => {
        await ClienteService.delete(id);
        loadClientes();
    };

    const renderTable = () => {
        if (clientes.length) {
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
                    {clientes.map((cliente) => (
                        <TableRow key={cliente.id}>
                            <TableCell align="left">{cliente.nome}</TableCell>
                            <TableCell align="left">{cliente.email}</TableCell>
                            <TableCell align="left">{DateUtils.formatDate(cliente.dataNascimento,'dd/MM/yyyy')}</TableCell>
                            <TableCell align="left">{cliente.sexo}</TableCell>
                            <TableCell align="right">
                                <Button color="primary" variant="outlined" onClick={() => openDialog(cliente)}>
                                    Editar
                                </Button>
                                <Button color="default" variant="outlined" onClick={() => deleteCliente(cliente.id)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        }

        return (<Typography variant="subtitle1"> Nenhum cliente encontrado. </Typography>)
    };

    const loadClientes = async () => {
        const {data} = await ClienteService.findAll();
        setClientes(data);
    };

    return (
        <Container style={{paddingTop: '30px'}}>
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
