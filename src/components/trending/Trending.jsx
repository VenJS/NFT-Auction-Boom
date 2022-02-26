import Card from "../card/Card";
import { MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <div>
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <Select
          className={classNames(styles.select)}
          label="This"
          displayEmpty="true"
        >
          <MenuItem value={10} label="this week">
            This week
          </MenuItem>
        </Select>
      </Container>
      <Grid container spacing={2} className={classNames(styles.container)}>
        {cards.map((card, i) => (
          <Grid item xs={3} key={i}>
            <Card
              name={card.name}
              like={card.likes}
              mediaUrl={card.mediaUrl}
              timeLeft={card.timeLeft}
              price={card.price}
              currency={card.currency}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
