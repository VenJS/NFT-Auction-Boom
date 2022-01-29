import classNames from "classnames";
import styles from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd = 0, onTimeEnd }) {
  return (
    <div className={classNames(styles["product-info-timer"])}>
      {timeEnd == null ? (
        <div className={classNames(styles.timer)}>
      </div>
      ) : (
        <div className={classNames(styles.timer)}>
          <p className={classNames(styles.title)}>Ends In</p>
          <Countdown className={classNames(styles.active)} date={Date.now() + 5000000} onComplete={() => onTimeEnd}></Countdown>
        </div>
      )}
    </div>
  );
}
