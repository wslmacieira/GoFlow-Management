import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Button
} from "@material-ui/core";

import MenuAdmin from "../../../components/menu-admin";

import { api } from "../../../services/api";

import { useStyles } from '../../../styles/global.styles'

export default function EmbarcadorCadastrar() {
  const classes = useStyles();

  const [provider, setProvider] = useState('')
  const [oferta, setOferta] = useState('')
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState(0)

  async function handleSubmit() {

    const data = {
      id_provider: provider,
      id_offer: oferta,
      value,
      amount,
    }
    console.log('data ->', data)

    const response = await api.post("/lances", data);

    if (response.status === 201) {
      window.location.href = "/admin/lances"
    } else {
      alert("Erro ao cadastrar Lance!")
    }

  }

  return (
    <div className={classes.root}>

      <MenuAdmin title={'Lances'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Link to="/admin/Lances" style={{ textDecoration: 'none' }} >
            <Button variant="contained" style={{ marginBottom: 15 }}>
              Voltar
              </Button>
          </Link>
          <Paper className={classes.paper}>
            <h2>Cadastro de Ofertas</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="provider"
                  name="provider"
                  label="Provider"
                  fullWidth
                  autoComplete="provider"
                  value={provider}
                  onChange={e => setProvider(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="oferta"
                  name="oferta"
                  label="Oferta"
                  fullWidth
                  autoComplete="oferta"
                  value={oferta}
                  onChange={e => setOferta(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="value"
                  name="value"
                  label="Valor"
                  fullWidth
                  autoComplete="value"
                  value={value}
                  onChange={e => setValue(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="amount"
                  name="amount"
                  label="Valor Frete"
                  fullWidth
                  autoComplete="amount"
                  value={amount}
                  onChange={e => setAmount(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Box pt={4}>
          </Box>
        </Container>
      </main>
    </div>
  );
}
