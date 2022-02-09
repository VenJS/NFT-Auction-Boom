import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import classNames from "classnames";
import styles from "./ProductActions.module.scss";

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
  text,
  bids,
}) {
  return (
    <div className={classNames(styles["product-actions"])}>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <Button
            className={classNames(styles.button)}
            disabled={isLive == false ? true : false}
            onClick={onBuy}
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
            disabled={isLive == false ? true : false}
            onClick={onBid}
          >
            Place bid for {bidAmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
