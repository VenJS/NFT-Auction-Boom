import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductActions.module.scss";

export default function ProductActions({
  isLive = true,
  currency = "ETH",
  buyAmount = 12,
  bidAmount = 4,
  onBuy,
  onBid,
}) {
  return (
    <div className={classNames(styles["product-actions"])}>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Button
            className={classNames(styles.button)}
            disabled={isLive == false ? true : false}
            onClick={() => {
              alert("clicked");
            }}
            variant="contained"
          >
            Buy for {buyAmount} {currency}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            className={classNames(styles.button)}
            variant="outlined"
            color="success"
          >
            Place bid for {bidAmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
