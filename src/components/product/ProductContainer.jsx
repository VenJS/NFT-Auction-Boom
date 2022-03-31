import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import Grid from "@mui/material/Grid";
import ProductActions from "./ProductActions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import { useRouter } from "next/router";

export default function ProductContainer({
  name = "Gentleman ",
  owner = "Murphy",
  price = 25,
  currency = "LTC",
  likes = 250,
  auction_end,
  details = "The god Bragi asks where a thundering sound is coming from, and says that the benches of Valhalla are creaking—as if the god Baldr had returned to Valhalla—and that it sounds like the movement of a thousand. Odin responds that Bragi knows well that the sounds are for Eric Bloodaxe, who will soon arrive in Valhalla. Odin tells the heroes Sigmund and Sinfjötli to rise to greet Eric and invite him into the hall, if it is indeed he.Sigmund asks Odin why he would expect Eric more than any other king, to which Odin responds that Eric has reddened his gore-drenched sword with many other lands. Eric arrives, and Sigmund greets him, tells him that he is welcome to come into the hall, and asks him what other lords he has brought with him to Valhalla. Eric says that with him are five kings, that he will tell them the name of them all, and that he, himself, is the sixth.",
  bids,
  source,
}) {
  const router = useRouter();
  console.log(router.query);

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
