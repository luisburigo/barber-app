import React, { useEffect, useState } from "react";
import { Container, Grid, FormControl, InputLabel, Input, Button, Dialog, Typography, TableHead, TableRow, TableCell, TableBody, Table } from "@material-ui/core";
import UnidadeService from "../../services/UnidadeService";
import Unidade from "./Unidade";
import { DialogService } from "../../services/DialogService";


export default function Unidades(){
  const [unidades, setUnidades] = useState([]);

  useEffect(() => {
    loadUnidades();
  }, []);

  const openDialog = async(unidade = null) => {
    const res = await DialogService.open(Unidade, {unidadeId: unidade.id});

    if(res){
      loadUnidades();
    }
  };

  const deleteUnidade = async(id) => {
    await UnidadeService.delete(id);
    loadUnidades();
  };

  const renderTable = () => {
    if(unidades.length){
      return(
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Endereço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unidades.map((unidade) => (
              <TableRow key={unidade.id}>
                <TableCell align="left">{unidade.nome}</TableCell>
                <TableCell align="left">{unidade.endereco}</TableCell>
                <TableCell>
                  <Button color="primary" variant="outlined" onClick={()  => openDialog(unidade)}>
                    Editar
                  </Button>
                  <Button color="default" variant="outlined" onClick={() => deleteUnidade(unidade.id)}>
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    return(<Typography variant="subtitle1">Nenhuma unidade encontrada.</Typography>)
  };

  const loadUnidades = async () => {
    const { data } = await UnidadeService.findAll();
    setUnidades(data);
  };

  return (
    <Container style={{paddingTop: '30px'}}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Pesquisar</InputLabel>
            <Input id="pesquisa"></Input>
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