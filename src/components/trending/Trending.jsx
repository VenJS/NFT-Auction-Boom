import Card from "../card/Card";
import { MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <div >
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <Select className={classNames(styles.select)}>
        <MenuItem value = {10} label='this week'>This week</MenuItem>
        </Select>
      </Container>
      <Grid container spacing={1} className={classNames(styles.container)}> 
        <Grid item >
          <Card name="Clock"/>
        </Grid>
        <Grid item>
          <Card name="DOGE"/>
        </Grid>
        <Grid item >
          <Card name="BTC"/>
        </Grid>
        <Grid item >
          <Card name="Litecoin"/>
        </Grid>
      </Grid>
    </div>
  );
}
