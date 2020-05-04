import React from "react";
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
    TableBody
} from "@material-ui/core";

export default function Funcionarios() {

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
                    <Button variant="contained" color="primary">Cadastrar</Button>
                </Grid>
                <Grid item xs={12}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Teste
                                </TableCell>
                                <TableCell align="right">Teste</TableCell>
                                <TableCell align="right">Teste</TableCell>
                                <TableCell align="right">Teste</TableCell>
                                <TableCell align="right">Teste</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
    )
}
