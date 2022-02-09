import classNames from "classnames";
import styles from "./ProductInfo.module.scss";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoTitle from "./ProductInfoTitle";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductInfo({
  title = "String",
  creator = "String",
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title}></ProductInfoTitle>
      <Stack spacing={2} direction="row" className={classNames(styles.stats)}>
        <ProductInfoPrice amount={price} currency={currency}></ProductInfoPrice>
        <div className={classNames(styles.badge)}>
          <div>
            {isLive !== null ? <ProductInfoStatus></ProductInfoStatus> : null}
          </div>

          <ProductInfoLikes
            amount={likes}
            className={classNames(styles.likes)}
          ></ProductInfoLikes>
        </div>
      </Stack>
      <Grid container spacing={{ xs: 16 }}>
        <Grid item xs={7}>
          <ProductInfoCreator name={creator} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfoTimer />
        </Grid>
      </Grid>
    </div>
  );
}
