import { Link, Typography } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="javascript:;">
        Gestão ShipperFlux
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
