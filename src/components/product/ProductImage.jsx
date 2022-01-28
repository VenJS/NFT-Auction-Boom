import classNames from "classnames";
import styles from "./ProductImage.module.scss";

export default function ProductImage({
  url = "https://miro.medium.com/max/1000/1*jKnY9OzEhllkSjq_W7zFbg.png"
}) {
  return (
    <div className={classNames(styles.product_image)}>
      <img className={classNames(styles.image)} src={url} />
    </div>
  );
}
