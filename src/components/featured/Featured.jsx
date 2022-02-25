import { ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Featured({ items = [] }) {
  const router = useRouter();

  const data = Array.from(items);

  const [featuredCards, setFeaturedCards] = useState();

  useEffect(async () => {
    const result = await axios("https://nft-auction.herokuapp.com/featured");
    console.log(result);
    setFeaturedCards(result.featuredCards);
    console.log(featuredCards);
  });

  return (
    <div className={classNames(styles.container)}>
      {items ? (
        <ImageList cols={6}>
          {data.map((item, i) => (
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
