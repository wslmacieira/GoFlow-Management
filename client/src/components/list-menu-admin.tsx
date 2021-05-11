import Link from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/admin/embarcadores">
      <ListItemIcon>
        <ApartmentIcon />
      </ListItemIcon>
      <ListItemText primary="Embarcadores" />
    </ListItem>
    <ListItem button component="a" href="/admin/transportadoras">
      <ListItemIcon>
        <LocalShippingIcon />
      </ListItemIcon>
      <ListItemText primary="Transportadoras" />
    </ListItem>
    <ListItem button component="a" href="/admin/ofertas">
      <ListItemIcon>
        <LocalOfferIcon />
      </ListItemIcon>
      <ListItemText primary="Ofertas" />
    </ListItem>
    <ListItem button component="a" href="/admin/lances">
      <ListItemIcon>
        <MonetizationOnIcon />
      </ListItemIcon>
      <ListItemText primary="Lances" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);
