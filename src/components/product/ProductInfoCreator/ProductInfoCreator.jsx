import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss";
import User from "../../user/User";

export default function ProductInfoCreator({
  name = "String",
  avatar = "String",
  verified = false,
}) {
  return (
    <div className={classNames(styles["product-info-creator"])}>
      <div className={classNames(styles.title)}>Creator</div>
      <div className={classNames(styles["user-container"])}>
        <User name={name} avatar={avatar} verified={verified}></User>
      </div>
    </div>
  );
}
