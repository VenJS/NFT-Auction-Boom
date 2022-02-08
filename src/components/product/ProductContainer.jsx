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
      <ProductActions></ProductActions>
      <ProductImage></ProductImage>
      <div className={classNames(styles["product-details"])}>
        <ProductInfo creator={owner} title={name}></ProductInfo>
        <ProductTabs></ProductTabs>
      </div>
    </div>
  );
}
