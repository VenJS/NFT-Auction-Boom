import Card from "../card/Card";
import { MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [""] }) {
  return (
    <div>
      <Container maxWidth="false">
        <div className={classNames(styles.trending)}>Trending</div>
        <Select className={classNames(styles.select)}>
        <MenuItem value = {10} label='this week'>This week</MenuItem>
        </Select>
      </Container>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <Card name="Clock"/>
        </Grid>
        <Grid item xs={3}>
          <Card name="DOGE"/>
        </Grid>
        <Grid item xs={3}>
          <Card name="BTC"/>
        </Grid>
        <Grid item xs={3}>
          <Card name="Litecoin"/>
        </Grid>
      </Grid>
    </div>
  );
}
