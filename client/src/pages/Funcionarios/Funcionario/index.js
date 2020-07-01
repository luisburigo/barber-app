import React, {useState, useEffect} from "react";
import {Container, Dialog, DialogTitle, Grid, TextField, DialogActions, Button, FormControl, InputLabel, Select, MenuItem, Input, Chip} from "@material-ui/core";
import FuncionarioService from "../../../services/FuncionarioService";
import ServicoService from "../../../services/ServicoService";
import { useTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format, parse } from "date-fns";

export default function Funcionarios({open, funcionarioId, close}) {
    const theme = useTheme();

    const [funcionario, setFuncionario] = useState({
        nome: "",
        email: "",
        dataNascimento: new Date(),
        sexo: "",
        endereco: "",
        servicos: []
    });

    const [sexoEnum, setSexoEnum] = useState({});
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        loadFuncionario();
        loadGenreEnum();
        loadServices();
    }, []);

    const loadFuncionario = async () => {
        if (funcionarioId) {
            const {data} = await FuncionarioService.find(funcionarioId);
            setFuncionario({...data, dataNascimento: parse(data.dataNascimento, 'yyyy-MM-dd', new Date())});
        }
    }

    const handleSubmit = async () => {
        const dataNascimento = format(funcionario.dataNascimento,'yyyy-MM-dd');
        const res = await FuncionarioService.create({...funcionario, dataNascimento });
        close(res.data);
    }

    const loadGenreEnum = async () => {
        const {data} = await FuncionarioService.fillEnumGenre();
        setSexoEnum(data.sexoEnum);
    }

    const loadServices = async () => {
        const {data} = await ServicoService.findAll();
        setServicos(data);
    }

    return (
        <Dialog onClose={() => close(false)} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Cadastro de Funcionario</DialogTitle>
            <form>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Nome"
                                id="nome"
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
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Data de nascimento"
                                    value={funcionario.dataNascimento}
                                    onChange={date => setFuncionario({...funcionario, dataNascimento: date})}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl
                                fullWidth
                                variant="outlined" 
                            >
                                <InputLabel id="demo-simple-select-outlined-label">Gênero</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    label="Gênero"
                                    value={funcionario.sexo}
                                    onChange={event => setFuncionario({...funcionario, sexo: event.target.value})}
                                >
                                    {Object.entries(sexoEnum).map(([key, value]) => <MenuItem key={key} value={value}>{value}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Endereço"
                                id="endereço"
                                variant="outlined" value={funcionario.endereco}
                                onChange={event => setFuncionario({...funcionario, endereco: event.target.value})}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl 
                                fullWidth
                                variant="outlined" 
                            >
                                <InputLabel id="demo-mutiple-chip-label">Serviços</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={funcionario.servicos}
                                    onChange={event => setFuncionario({...funcionario, servicos: event.target.value})}
                                    input={<Input id="select-multiple-chip"/>}
                                    renderValue={(servicos) => (
                                        <div>
                                            {servicos.map((servico) => (
                                                <Chip key={servico.id} label={servico.nome}/>
                                            ))}
                                        </div>
                                    )}
                                >
                                    {servicos.map((servico) => (
                                        <MenuItem 
                                            key={servico.id} 
                                            value={servico}
                                            style={{ fontWeight: funcionario.servicos.includes(servico) 
                                                ? theme.typography.fontWeightBold
                                                : theme.typography.fontWeightRegular }}
                                        >
                                            {servico.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
