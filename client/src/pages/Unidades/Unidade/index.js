import React, { useState, useEffect } from "react";
import UnidadeService from "../../../services/UnidadeService";
import { Dialog, DialogTitle, Container, Grid, TextField, DialogActions, Button } from "@material-ui/core";

export default function Unidades({open, unidadeId, close}){
  const [unidade, setUnidade] = useState({
    nome: "",
    endereco: ""
  });

  useEffect(() => {
    loadUnidade();
  }, []);

  const loadUnidade = async() => {
    if(unidadeId){
      const {data} = await UnidadeService.find(unidadeId);
      setUnidade(data);
    }
  };

  const handleSubmit = async() => {
    const res = await UnidadeService.create(unidade);
    close(res.data);
  };

  return (
    <Dialog onClose={() => close(false)} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Cadastro de Unidades</DialogTitle>
      <form>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="nome"
                id="nome"
                variant="outlined"
                value={unidade.nome}
                onChange={event => setUnidade({...unidade, nome: event.target.value})}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Endereço"
                id="endereco"
                variant="outlined"
                value={unidade.endereco}
                onChange={event => setUnidade({...unidade, endereco: event.target.value})}
              />
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