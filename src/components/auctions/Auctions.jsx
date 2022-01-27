import { Select } from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import { MenuItem } from "@mui/material";
import Card from "../card/Card";

export default function Auctions({ cards = [] }) {

  return (
    <div>
      <Container className={classNames(styles.container)}>
        <div className={classNames(styles.wrapper)}>
        <LocalFireDepartmentIcon
          color="error"
          fontSize="large"
        ></LocalFireDepartmentIcon>
        <h1 className={classNames(styles.liveAuction)}>Live Auctions</h1>
        </div>
        <Select className={classNames(styles.select)}>
          <MenuItem label="This week" value={10}>
            This week
          </MenuItem>
        </Select>
      </Container>
      <Grid container spacing={1} className={classNames(styles.cardContainer)}>
        <Grid item xs={3}>
          <Card name='Clock'></Card>
        </Grid>
        <Grid item xs={3}>
          <Card name='DOGE'></Card>
        </Grid>
        <Grid item xs={3}>
          <Card name='BTC'></Card>
        </Grid>
        <Grid item xs={3}>
          <Card name="Litecoin"></Card>
        </Grid>
      </Grid>
    </div>
  );
}
