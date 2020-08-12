import React, { useState, useEffect } from "react";
import { Container, Grid, FormControl, InputLabel, Input, Button, Table } from "@material-ui/core";
import HorarioService from "../../services/HorarioService";
import { DialogService } from "../../services/DialogService";
import Horario from "./Horario";

export default function Horarios(){
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    loadHorarios();
  }, []);

  const openDialog = async(horario = null) => {
    const res = await DialogService.open(Horario, {horarioId: horario.id})

    if(res){
      loadHorarios();
    }
  };

  const renderTable = () => {
    if(horarios.length){
      return(
        <Table aria-label="simple table">

        </Table>
      )
    }
  };

  const loadHorarios = async () => {
    const {data} = await HorarioService.findAll();
    setHorarios(data);
  };

  return(
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