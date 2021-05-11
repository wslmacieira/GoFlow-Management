import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";

import MenuAdmin from "../../../components/menu-admin";

import { api } from "../../../services/api";

import { useStyles } from '../../../styles/global.styles'

export default function EmbarcadorCadastrar() {
  const classes = useStyles();

  const [customer, setCustomer] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [valorInicial, setValorInicial] = useState(0);
  const [amount, setAmount] = useState(0)
  const [amountType, setAmountType] = useState("TON");

  async function handleSubmit() {

    const data = {
      id_customer: customer,
      from,
      to,
      initial_value: valorInicial,
      amount,
      amount_type: amountType
    }
    console.log('data ->', data)

    const response = await api.post("/ofertas", data);

    if (response.status === 201) {
      window.location.href = "/admin/ofertas"
    } else {
      alert("Erro ao cadastrar Oferta!")
    }

  }

  return (
    <div className={classes.root}>

      <MenuAdmin title={'Ofertas'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Link to="/admin/ofertas" style={{ textDecoration: 'none' }} >
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
                  id="customer"
                  name="customer"
                  label="Customer"
                  fullWidth
                  autoComplete="customer"
                  value={customer}
                  onChange={e => setCustomer(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="from"
                  name="from"
                  label="From"
                  fullWidth
                  autoComplete="from"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="to"
                  name="to"
                  label="Para"
                  fullWidth
                  autoComplete="to"
                  value={to}
                  onChange={e => setTo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="valorInicial"
                  name="valorInicial"
                  label="Valor Inicial"
                  fullWidth
                  autoComplete="valorInicial"
                  value={valorInicial}
                  onChange={e => setValorInicial(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
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
