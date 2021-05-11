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

  const [name, setName] = useState('')
  const [doc, setDoc] = useState('')
  const [about, setAbout] = useState('')
  const [active, setActive] = useState({ active: true });
  const [site, setSite] = useState('')

  async function handleSubmit() {

    const data = {
      name,
      doc,
      about,
      active: active.active,
      site
    }
    console.log('data ->', data)

    const response = await api.post("/transportadoras", data);

    if (response.status === 201) {
      window.location.href = "/admin/transportadoras"
    } else {
      alert("Erro ao cadastrar Transportador!")
    }

  }

  const handleChange = (event: any) => {
    setActive({ ...active, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>

      <MenuAdmin title={'Transportadoras'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Link to="/admin/transportadoras" style={{ textDecoration: 'none' }} >
            <Button variant="contained" style={{ marginBottom: 15 }}>
              Voltar
              </Button>
          </Link>
          <Paper className={classes.paper}>
            <h2>Cadastro de Transportadoras</h2>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="name"
                  name="name"
                  label="Nome"
                  fullWidth
                  autoComplete="nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="doc"
                  name="doc"
                  label="Doc"
                  fullWidth
                  autoComplete="doc"
                  value={doc}
                  onChange={e => setDoc(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="about"
                  name="about"
                  label="Sobre"
                  fullWidth
                  autoComplete="about"
                  value={about}
                  onChange={e => setAbout(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={<Checkbox checked={active.active} onChange={handleChange} name="active" color="primary" />}
                  label="Ativo"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="site"
                  name="site"
                  label="Site"
                  fullWidth
                  autoComplete="site"
                  value={site}
                  onChange={e => setSite(e.target.value)}
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
