import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({
  timeEnd = "2022-07-30",
  onTimeEnd,
}) {
  return (
    <div className={classNames(styles["product-info-timer"])}>
      <div className={classNames(styles.title)}>ENDS IN</div>
      {timeEnd == null ? (
        <div className={classNames(styles.timer)}></div>
      ) : (
        <div className={classNames(styles.timer)}>
          <Countdown
            className={classNames(styles.active)}
            date={Date.now() + 500000}
            children={onTimeEnd}
          ></Countdown>
        </div>
      )}
    </div>
  );
}
