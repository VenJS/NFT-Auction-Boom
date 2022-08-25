import classNames from "classnames";
import styles from "./ProductInfoLikes.module.scss";
import millify from "millify";
import { Chip } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip
        className={classNames(styles.likes)}
        label={millify(amount)}
        variant="outlined"
        icon={<Favorite className={classNames(styles.icon)}></Favorite>}
        clickable={true}
      ></Chip>
    </div>
  );
}
