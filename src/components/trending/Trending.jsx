import Card from "../card/Card";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [], sort = [] }) {
  return (
    <div>
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel>Select</InputLabel>
          <Select className={classNames(styles.select)}>
            {sort.map((arr, i) => (
              <MenuItem key={i}>{arr.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
      <Grid container spacing={1} className={classNames(styles.container)}>
        {cards.map((card, i) => (
          <Grid item xs={3} key={i}>
            <Card
              name={card.name}
              like={card.likes}
              mediaUrl={card.mediaUrl}
              timeLeft={card["auction_end"]}
              price={card.price}
              currency={card.currency}
              user={card.owner}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
