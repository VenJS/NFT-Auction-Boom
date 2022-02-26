import Card from "../card/Card";
import { MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [], sort = [] }) {
  return (
    <div>
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <Select
          className={classNames(styles.select)}
          label="label"
          displayEmpty="true"
        >
          {sort.map((arr, i) => (
            <MenuItem value={arr.value} label={arr.label}>
              {arr.label}
            </MenuItem>
          ))}
        </Select>
      </Container>
      <Grid container spacing={2} className={classNames(styles.container)}>
        <Grid item xs={3}>
          {cards.map((card, i) => (
            <Card
              name={card.name}
              like={card.likes}
              mediaUrl={card.mediaUrl}
              timeLeft={card.timeLeft}
              price={card.price}
              currency={card.currency}
              user={card.user}
              key={i}
            ></Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
