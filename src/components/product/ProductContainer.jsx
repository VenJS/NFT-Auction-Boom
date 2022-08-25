import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import Grid from "@mui/material/Grid";
import ProductActions from "./ProductActions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useRouter } from "next/router";

export default function ProductContainer({
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source,
}) {
  const router = useRouter();

  return (
    <div className={classNames(styles["product-container"])}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <ProductImage url={source}></ProductImage>
        </Grid>
        <Grid item xs={5} className={classNames(styles["grid-container"])}>
          <ProductInfo
            creator={owner}
            title={name}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            isLive={true}
            onTimeEnd={auction_end}
          ></ProductInfo>
          <ProductTabs text={details} bids={bids}></ProductTabs>
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
          ></ProductActions>
        </Grid>
      </Grid>
    </div>
  );
}
