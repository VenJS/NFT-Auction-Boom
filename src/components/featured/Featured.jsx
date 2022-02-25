import { ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <div className={classNames(styles.container)}>
      {items ? (
        <ImageList cols={6}>
          {items.map((item, i) => (
            <ImageListItem
              key={i}
              cols={item.cols || 1}
              rows={item.rows || 1}
              className={classNames(styles.images)}
            >
              <img
                className={classNames(styles.image)}
                src={item.image}
                alt={item.title}
                onClick={(e) => {
                  router.push(`/product/${item.id}`);
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : null}
    </div>
  );
}
