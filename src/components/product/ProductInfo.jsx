import classNames from "classnames";
import styles from "./ProductInfo.module.scss";
import ProductTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";

export default function ProductInfo({
  title = "String",
  creator = "String",
  price = "Number",
  currency = "String",
  likes = "Number",
  onTimeEnd = "Function",
  timeEnd = "Date",
  isLive = true,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <Stack spacing={2} direction = 'row'>
        <ProductInfoPrice></ProductInfoPrice>
        <ProductInfoLikes></ProductInfoLikes>
      </Stack>
      <Grid container>
        <ProductInfoCreator />
        <ProductInfoTimer />
      </Grid>
      <ProductInfoStatus></ProductInfoStatus>
    </div>
  );
}
