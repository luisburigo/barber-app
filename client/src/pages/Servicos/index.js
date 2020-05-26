import React, { useEffect, useState } from "react";
import { Container, Grid, FormControl, InputLabel, Input, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@material-ui/core";
import ServicoService from "../../services/ServicoService";
import Servico from "./Servico";
import { DialogService } from "../../services/DialogService";

export default function Servicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    loadServicos();
  }, []);

  const openDialog = async(servico = null) => {
    const res = await DialogService.open(Servico, {servicoId: servico.id});

    if(res){
      loadServicos();
    }
  };

  const deleteServico = async (id) => {
    await ServicoService.delete(id);
    loadServicos();
  }

  const renderTable = () => {
    if(servicos.length){
      return( 
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Tempo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {servicos.map((servico) =>  (
              <TableRow key={servico.id}>
                <TableCell align="left">{servico.nome}</TableCell>
                <TableCell align="left">{servico.preco}</TableCell>
                <TableCell align="left">{servico.tempo}</TableCell>

                <TableCell align="right">
                  <Button color="primary" variant="outlined" onClick={() => openDialog(servico)}>
                    Editar
                  </Button>

                  <Button color="default" variant="outlined" onClick={() => deleteServico(servico.id)}>
                    Excluir
                  </Button>

                </TableCell>
              </TableRow>
            ))}

          </TableBody>

        </Table>
      )
    }

    return (<Typography variant="subtitle1">Nenhum serviço encontrado.</Typography>)
  };

  const loadServicos = async () => {
    const {data} = await ServicoService.findAll();
    setServicos(data);
  };

  return (
    <Container style={{paddingTop: '30px'}}>

      <Grid container spacing={3}>

        <Grid item xs={6}>

          <FormControl fullWidth>

            <InputLabel>Pesquisar</InputLabel>
            <Input id="pesquisa" />

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