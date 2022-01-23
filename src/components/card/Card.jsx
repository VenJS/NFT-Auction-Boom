import millify from "millify";
import CardTag from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import Chip from "@mui/material/Chip";
import classNames from "classnames";
import styles from "./Card.module.scss";
import { Favorite } from "@mui/icons-material";

export default function Card({
  name = "String",
  likes = 0,
  mediaUrl = "String",
  user = {
    avatar: {
      url: "String",
    },
    verified: "Boolean",
  },
  price = "String",
  currency = "String",
}) {
  return (
    <div>
      <CardTag className={classNames(styles.card)}>
        <Avatar url="images/avatar.png" size="55px" />
        <img className={classNames(styles.media)} src="images/nft.jpg" />
        <div className={classNames(styles.container)}>
          <div className={classNames(styles.title)}>{name}</div>
          <Chip
            className={classNames(styles.likes)}
            icon={<Favorite className={classNames(styles.icon)} />}
            clickable
            label={millify(likes, {
              units: ["K", "M"],
            })}
          ></Chip>
          <div className={classNames(styles.price)}>{price}</div>
        </div>
      </CardTag>
    </div>
  );
}
