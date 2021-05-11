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
  id: string;
  name: string;
  doc: string;
  about: string;
  active: boolean;
  site: string;
}

export default function TransportadoraListagem() {
  const classes = useStyles();

  const [transportadoras, setTransportadoras] = useState([] as Transportador[]);

  useEffect(() => {
    async function loadEmbarcadores() {
      const response = await api.get("/transportadoras");
      console.log("response ->", response.data);
      setTransportadoras(response.data);
    }
    loadEmbarcadores();
  }, []);

  return (
    <div className={classes.root}>
      <MenuAdmin title={'Transportadoras'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Link to="/admin/transportadoras/cadastrar" style={{ textDecoration: 'none' }} >
                <Button variant="contained" color="primary" style={{ marginBottom: 15 }}>
                  Cadastrar
              </Button>
              </Link>
              <Paper className={classes.paper}>
                <h2>Lista de Transportadora</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TableContainer component={Paper}>
                      <Table className={classes.table} aria-label="a dense table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">Doc</TableCell>
                            <TableCell align="left">Sobre</TableCell>
                            <TableCell align="left">active</TableCell>
                            <TableCell align="left">site</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {transportadoras.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="left">{row.doc}</TableCell>
                              <TableCell align="left">{row.about}</TableCell>
                              <TableCell align="left">{row.active ? 'Ativo' : 'Inativo'}</TableCell>
                              <TableCell align="left">{row.site}</TableCell>
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
