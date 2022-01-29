import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";
import { Chip } from "@mui/material";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip label={millify(amount)}></Chip>
    </div>
  );
}
