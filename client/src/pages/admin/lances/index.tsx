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

type Transportador = {
  id_provider: string;
  id_offer: string;
  value: number;
  amount: number;
  transportador: {
    name: string;
  }
}

export default function TransportadoraListagem() {
  const classes = useStyles();

  const [lances, setLances] = useState([] as Transportador[]);

  useEffect(() => {
    async function loadEmbarcadores() {
      const response = await api.get("/lances");
      console.log("response ->", response.data);
      setLances(response.data);
    }
    loadEmbarcadores();
  }, []);

  return (
    <div className={classes.root}>
      <MenuAdmin title={'Lances'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Link to="/admin/lances/cadastrar" style={{ textDecoration: 'none' }} >
                <Button variant="contained" color="primary" style={{ marginBottom: 15 }}>
                  Cadastrar
              </Button>
              </Link>
              <Paper className={classes.paper}>
                <h2>Lista de Lances</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Provider</TableCell>
                            <TableCell align="left">Oferta</TableCell>
                            <TableCell align="left">Valor</TableCell>
                            <TableCell align="left">Valor Frete</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {lances.map((row) => (
                            <TableRow key={row.id_offer}>
                              <TableCell component="th" scope="row">
                                {row.transportador.name}
                              </TableCell>
                              <TableCell align="left">{row.id_offer}</TableCell>
                              <TableCell align="left">{row.value}</TableCell>
                              <TableCell align="left">{row.amount}</TableCell>
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
