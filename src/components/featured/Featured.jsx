import { ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Featured({ items = [] }) {
  const router = useRouter();

  const data = Array.from(items);

  return (
    <div className={classNames(styles.container)}>
      {items ? (
        <ImageList cols={6} >
          {data.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                src={item.image}
                alt={item.title}
                onClick={(e) => {
                  router.push(item.href);
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : null}
    </div>
  );
}
