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
  price = 25,
  currency = "LTC",
  likes = 250,
  onTimeEnd = "Function",
  timeEnd = "Date",
  isLive = true,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title}></ProductInfoTitle>
      <Stack spacing={2} direction="row" className={classNames(styles.stats)}>
        <ProductInfoPrice amount={price} currency={currency}></ProductInfoPrice>
        <div className={classNames(styles.badge)}>
          <div className={classNames(styles.icon)}>
            <FiberManualRecordIcon></FiberManualRecordIcon>
            <span>LIVE</span>
          </div>
          <ProductInfoLikes
            amount={likes}
            className={classNames(styles.likes)}
          ></ProductInfoLikes>
        </div>
      </Stack>
      <Grid container spacing={{ xs: 16 }}>
        <Grid item xs={5}>
          <ProductInfoCreator name={creator} />
        </Grid>
        <Grid item xs={7}>
          <ProductInfoTimer />
        </Grid>
      </Grid>

      <div>
        {isLive !== null ? <ProductInfoStatus></ProductInfoStatus> : null}
      </div>
    </div>
  );
}
