import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd = 21, onTimeEnd }) {
  return (
    <div className={classNames(styles["product-info-timer"])}>
      {timeEnd == null ? <div></div> : <div className={classNames(styles.timer)}><Countdown date={Date.now() + 100000000}></Countdown></div>}
    </div>
  );
}
