import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Grid container className={classNames(styles.container)} spacing={2}>
      <Grid item xs={4}>
        <Logo type="muted"></Logo>
      </Grid>
      <Grid item xs={4}>
          <p>Bum All Rigths Reserved 2022</p>
      </Grid>
      <Grid item xs={4} className={classNames(styles.wrapper)}>
          <Button className={classNames(styles.buttons)}>Privacy Policy </Button>
          <Button className={classNames(styles.buttons)}>Cookie Policy </Button>
      </Grid>
    </Grid>
  );
}
