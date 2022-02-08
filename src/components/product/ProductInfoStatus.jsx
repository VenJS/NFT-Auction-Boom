import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <Chip
        className={classNames(styles.status)}
        label="LIVE"
        icon={<FiberManualRecordIcon className={classNames(styles.icon)} />}
      ></Chip>
    </div>
  );
}
