import React, { useState, useEffect } from "react";
import JornadaService from "../../services/JornadaService";
import Jornada from "./Jornada";
import { DialogService } from "../../services/DialogService";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Typography, Container, Grid, FormControl, InputLabel, Input } from "@material-ui/core";

export default function Jornadas(){
  const [jornadas, setJornadas] = useState([]);

  useEffect(() => {
    loadJornadas();
  }, []);

  const openDialog = async(jornada = null) => {
    const res = await DialogService.open(Jornada, {jornadaId: jornada.id});

    if(res){
      loadJornadas();
    }
  };

  const deleteJornada = async(id) => {
    await JornadaService.delete(id);
    loadJornadas();
  };

  const renderTable = () => {
    if(jornadas.length){
      return(
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jornadas.map((jornada) => (
              <TableRow key={jornada.id}>
                <TableCell align="left">{jornada.nome}</TableCell>
                <TableCell>
                  <Button color="primary" variant="outlined" onClick={() => openDialog(jornada)}>
                    Editar
                  </Button>
                  <Button color="default" variant="outlined" onClick={() => deleteJornada(jornada.id)}>
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    }

    return(<Typography variant="subtitle1">Nenhuma jornada encontrada.</Typography>)
  };

  const loadJornadas = async () => {
    const {data} = await JornadaService.findAll();
    setJornadas(data);
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