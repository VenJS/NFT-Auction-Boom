import { Select } from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import { MenuItem } from "@mui/material";
import Card from "../card/Card";

export default function Auctions({ cards = [], filter = [] }) {
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
          {filter.map((arr, i) => (
            <MenuItem key={i}>{arr.label}</MenuItem>
          ))}
        </Select>
      </Container>
      <Grid container spacing={1}>
        {cards.map((card, i) => (
          <Grid
            item
            xs={3}
            className={classNames(styles.cardContainer)}
            key={i}
          >
            <Card
              name={card.name}
              like={card.likes}
              mediaUrl={card.mediaUrl}
              timeLeft={card.timeLeft}
              price={card.price}
              currency={card.currency}
              user={card.user}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
