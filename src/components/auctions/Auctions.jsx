import { Select } from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import { MenuItem, FormControl, InputLabel } from "@mui/material";
import Card from "../card/Card";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const color = "white";
const useStyles = makeStyles(() => ({
  icon: {
    fill: color,
  },
}));

export default function Auctions({ cards = [], filter = [] }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classNames(styles["auction-container"])}>
      <Container className={classNames(styles.container)}>
        <div className={classNames(styles.wrapper)}>
          <LocalFireDepartmentIcon
            color="error"
            fontSize="large"
          ></LocalFireDepartmentIcon>
          <h1 className={classNames(styles.liveAuction)}>Live Auctions</h1>
        </div>
        <FormControl sx={{ m: 1, minWidth: 200, marginRight: "3rem" }}>
          <InputLabel>Price range</InputLabel>
          <Select
            className={classNames(styles.select)}
            value={value}
            onChange={handleChange}
          >
            {filter.map((arr, i) => (
              <MenuItem key={i} value={i}>
                {arr.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
