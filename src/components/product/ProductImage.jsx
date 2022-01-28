import classNames from "classnames";
import styles from "./ProductImage.module.scss";

export default function ProductImage({
  url = "https://miro.medium.com/max/1000/1*jKnY9OzEhllkSjq_W7zFbg.png",
}) {
  return (
    <div className="product-image">
      <img className="image" src={url} />
    </div>
  );
}
