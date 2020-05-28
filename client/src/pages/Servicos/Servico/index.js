import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, Container, Grid, TextField, DialogActions, Button } from "@material-ui/core";
import ServicoService from "../../../services/ServicoService";

export default function Servicos({open, servicoId, close}){
  const [servico, setServico] = useState({
    nome: "",
    preco: 0,
    tempo:  0
  });

  useEffect(() => {
    loadServico();
  }, []);

  const loadServico = async () => {
    if(servicoId){
      const {data} = await ServicoService.find(servicoId);
      setServico(data);
    }
  };

  const handleSubmit = async() => {
    const res = await ServicoService.create(servico);
    close(res.data);
  };

  return(
    <Dialog onClose={() => close(false)} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Cadastro de Serviços</DialogTitle>
      <form>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="nome"
                id="nome"
                variant="outlined"
                value={servico.nome}
                onChange={event => setServico({...servico, nome: event.target.value})}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                fullWidth
                label="Preço"
                id="preco"
                variant="outlined"
                value={servico.preco}
                onChange={event => setServico({...servico, preco: event.target.value})}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField 
                fullWidth
                label="Tempo"
                id="tempo"
                type="time"
                variant="outlined"
                value={servico.tempo}
                onChange={event => setServico({...servico, tempo: event.target.value})}
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