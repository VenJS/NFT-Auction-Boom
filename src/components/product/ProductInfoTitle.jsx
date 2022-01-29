import classNames from "classnames";
import styles from "./ProductInfoTitle.module.scss";
import Typography from "@mui/material/Typography";

export default function ProductInfoTitle({ text }) {
  return (
    <div className={classNames(styles["product-info-title"]) } >
      <Typography className={classNames(styles.title)} color='primary'>
        title
      </Typography>
    </div>
  );
}
