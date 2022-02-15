import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import Searchbar from "./searchbar/Searchbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={classNames(styles['grid-container'])}>
      <Grid container className={classNames(styles.wrapper)} spacing={2}>
        <Grid item xs={4} className={classNames(styles.logoWrapper)}>
          <Logo className={classNames(styles.logo)} />
        </Grid>
        <Grid item xs={4} className={classNames(styles.searchingbarContainer)}>
          <Searchbar
            className={classNames(styles.searchingbar)}
            placeholder="Find items, users and activities"
          />
        </Grid>
        <Grid item xs={4}>
          <Container className={classNames(styles.container)}>
            <Button className={classNames(styles.paper)}> Home </Button>
            <Button className={classNames(styles.paper)}> Activity </Button>
            <Button className={classNames(styles.paperExplore)}>
              {" "}
              Explore{" "}
            </Button>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
