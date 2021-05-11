import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Paper,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';

import MenuAdmin from '../../../components/menu-admin'

import { api } from '../../../services/api';

import { useStyles } from '../../../styles/global.styles'

type Oferta = {
  id_customer: string;
  from: string;
  to: string;
  initial_value: number;
  amount: number;
  amount_type: string;
  embarcador: {
    name: string;
  }
}

export default function OfertasListagem() {
  const classes = useStyles();

  const [ofertas, setOfertas] = useState([] as Oferta[]);

  useEffect(() => {
    async function loadEmbarcadores() {
      const response = await api.get("/ofertas");
      console.log("response ->", response.data);
      setOfertas(response.data);
    }
    loadEmbarcadores();
  }, []);

  return (
    <div className={classes.root}>
      <MenuAdmin title={'Ofertas'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Link to="/admin/ofertas/cadastrar" style={{ textDecoration: 'none' }} >
                <Button variant="contained" color="primary" style={{ marginBottom: 15 }}>
                  Cadastrar
              </Button>
              </Link>
              <Paper className={classes.paper}>
                <h2>Lista de Ofertas</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Origem</TableCell>
                            <TableCell align="left">Destino</TableCell>
                            <TableCell align="left">Valor Inicial</TableCell>
                            <TableCell align="left">Valor</TableCell>
                            <TableCell align="left">Valor por Tipo</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {ofertas.map((row) => (
                            <TableRow key={row.id_customer}>
                              <TableCell align="left">{row.embarcador.name}</TableCell>
                              <TableCell component="th" scope="row">
                                {row.from}
                              </TableCell>
                              <TableCell align="left">{row.to}</TableCell>
                              <TableCell align="left">{row.initial_value}</TableCell>
                              <TableCell align="left">{row.amount}</TableCell>
                              <TableCell align="left">{row.amount_type}</TableCell>
                              <TableCell align="left">
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
}
