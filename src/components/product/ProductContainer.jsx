import classNames from "classnames";
import styles from "../product/ProductTabs.module.scss";
import { Grid } from "@mui/material";
import ProductActions from "./ProductActions";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoTitle from "./ProductInfoTitle";
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
          <ProductImage></ProductImage>
        </Grid>
        <Grid item xs={5}>
          <ProductInfo creator={owner} title={name}></ProductInfo>
          <ProductTabs></ProductTabs>
          <ProductActions></ProductActions>
        </Grid>
      </Grid>
    </div>
  );
}
