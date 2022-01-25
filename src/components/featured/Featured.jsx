import { Container } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();

  const data = Array.from(items);

  return (
    <div>
      {items ? (
        <ImageList sx={{ width: 500, height: 450 }} cols={6} rowHeight={121}>
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
