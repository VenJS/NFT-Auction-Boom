import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import { Grid } from "@mui/material";
import ProductActions from "./ProductActions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

export default function ProductContainer({
  name = "Gentleman from Valhalla",
  owner = "Murphy",
  price,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source,
}) {
  return (
    <div className={classNames(styles["product-container"])}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <ProductImage url="https://miro.medium.com/max/1000/1*jKnY9OzEhllkSjq_W7zFbg.png"></ProductImage>
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            creator={owner}
            title={name}
            price={25}
            currency="LTC"
            likes={250}
            timeEnd="Date"
            isLive={true}
            onTimeEnd="Function"
          ></ProductInfo>
          <ProductTabs></ProductTabs>
          <ProductActions
            isLive={true}
            currency="ETH"
            buyAmount="12"
            bidAmount={3}
            onBuy={() => {
              alert("Bought! Congratulations!");
            }}
            onBid={() => {
              alert("Bid!");
            }}
            text="blalbal"
            bids={5}
          ></ProductActions>
        </Grid>
      </Grid>
    </div>
  );
}
