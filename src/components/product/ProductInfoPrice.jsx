import classNames from "classnames";
import styles from "./ProductInfoPrice.module.scss";

export default function ProductInfoPrice({ amount = 0, currency = "String" }) {
  return (
    <div className={classNames(styles["product-info-price"])}>
      <p>
        ON SALE FOR {amount} {currency}
      </p>
    </div>
  );
}
