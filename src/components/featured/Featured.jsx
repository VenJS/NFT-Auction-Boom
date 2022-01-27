import { Container } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function Featured({ items = [{
  image:
    "https://images.unsplash.com/photo-1637317957434-16798e804fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80",
  title: "Breakfast",
  rows: 2,
  cols: 3,
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  title: "Burger",
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1633294261565-04234dc78da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  title: "Camera",
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  title: "Coffee",
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1635244621620-ccadff2eb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  title: "Hats",
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1625737186162-5766a7289b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  title: "Honey",
  href: "/about",
},
{
  image:
    "https://images.unsplash.com/photo-1634689033402-a132c62b310e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  title: "Basketball",
  href: "/about",
}] }) {
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
