import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import Grid from "@mui/material/Grid";
import ProductActions from "../ProductActions/ProductActions";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../ProductInfo/ProductInfo";
import ProductTabs from "../ProductTabs/ProductTabs";

export default function ProductContainer({
  name = "Gentleman from Valhalla",
  owner = "Murphy",
  price = 25,
  currency = "LTC",
  likes = 250,
  auction_end,
  details = "for",
  bids = 1,
  source,
}) {
  return (
    <div className={classNames(styles["product-container"])}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ProductImage url="https://miro.medium.com/max/1000/1*jKnY9OzEhllkSjq_W7zFbg.png"></ProductImage>
        </Grid>
        <Grid item xs={5} className={classNames(styles["grid-container"])}>
          <ProductInfo
            creator={owner}
            title={name}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={source}
            isLive={true}
            onTimeEnd={auction_end}
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
            text={details}
            bids={bids}
          ></ProductActions>
        </Grid>
      </Grid>
    </div>
  );
}
