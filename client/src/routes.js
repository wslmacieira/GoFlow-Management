import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Imports Admin
import Embarcadores from './pages/admin/embarcadores'
import EmbarcadorCadastrar from './pages/admin/embarcadores/embarcadores.cadastrar'

import Transportadoras from './pages/admin/transportadoras'
import TransportadorCadastrar from './pages/admin/transportadoras/transportadoras.cadastrar'

import Ofertas from './pages/admin/ofertas';
import OfertaCadastrar from './pages/admin/ofertas/ofertas.cadastrar'

import Lances from './pages/admin/lances';
import LanceCadastrar from './pages/admin/lances/lances.cadastrar';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        {/* Rota Admin */}
        <Redirect exact from="/" to="/admin/embarcadores" />

        <Route path="/admin/embarcadores" exact component={Embarcadores} />
        <Route path="/admin/embarcadores/cadastrar" exact component={EmbarcadorCadastrar} />

        <Route path="/admin/transportadoras" exact component={Transportadoras} />
        <Route path="/admin/transportadoras/cadastrar" exact component={TransportadorCadastrar} />

        <Route path="/admin/ofertas" exact component={Ofertas} />
        <Route path="/admin/ofertas/cadastrar" exact component={OfertaCadastrar} />

        <Route path="/admin/lances" exact component={Lances} />
        <Route path="/admin/lances/cadastrar" exact component={LanceCadastrar} />
      </Switch>
    </BrowserRouter>
  )
}
