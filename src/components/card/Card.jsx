import millify from "millify";
import CardTag from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import Chip from "@mui/material/Chip";
import classNames from "classnames";
import styles from "./Card.module.scss";
import { Favorite } from "@mui/icons-material";
import Countdown from "react-countdown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState } from "react";
import { CardHeader, CardContent, CardMedia } from "@mui/material";

export default function Card({
  name = "String",
  likes = 0,
  mediaUrl = "images/nft.jpg",
  timeLeft = 100000000,
  user = {
    avatar: {
      url: "images/avatar.png",
    },
    verified: Boolean,
  },
  price = "~12.2",
  currency = "ETH",
}) {
  const [likesNumber, setLikesNumber] = useState(likes);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {timeLeft ? (
        <CardTag
          sx={{ width: 345, height: 550 }}
          className={classNames(styles.card)}
        >
          <CardHeader
            avatar={<Avatar verified={user.verified} url={user.avatar.url} />}
            className={classNames(styles.header)}
          />
          <CardMedia
            component="img"
            src={mediaUrl}
            alt={name}
            className={classNames(styles.media)}
          ></CardMedia>

          <div className={classNames(styles.badge)}>
            <FiberManualRecordIcon fontSize="small"></FiberManualRecordIcon>
            <span>LIVE</span>
          </div>

          <div className={classNames(styles.countdown)}>
            <Countdown date={Date.now() + timeLeft}></Countdown>
          </div>
          <CardContent className={classNames(styles.content)}>
            <div className={classNames(styles.container)}>
              <div className={classNames(styles.title)}>{name}</div>
              <div className={classNames(styles.price)}>
                {price} {currency}
              </div>
            </div>
            <Chip
              className={classNames(styles.likes)}
              icon={<Favorite className={classNames(styles.icon)} />}
              clickable
              onClick={() => setLikesNumber(likesNumber + 1)}
              label={millify(likesNumber, {
                units: ["", "K", "M"],
                space: true,
              })}
              sx={{ paddingBottom: 0 }}
            ></Chip>
          </CardContent>
        </CardTag>
      ) : (
        <CardTag
          sx={{ width: 345, height: 550 }}
          className={classNames(styles.card)}
        >
          <CardHeader
            avatar={<Avatar verified={user.verified} url={user.avatar.url} />}
            className={classNames(styles.header)}
          />
          <CardMedia
            component="img"
            src={mediaUrl}
            alt={name}
            className={classNames(styles.media)}
          ></CardMedia>

          <CardContent className={classNames(styles["not-live-content"])}>
            <div className={classNames(styles.container)}>
              <div className={classNames(styles.title)}>{name}</div>
              <div className={classNames(styles.price)}>
                {price} {currency}
              </div>
            </div>
            <Chip
              className={classNames(styles.likes)}
              icon={<Favorite className={classNames(styles.icon)} />}
              clickable
              onClick={() => setLikesNumber(likesNumber + 1)}
              label={millify(likesNumber, {
                units: ["", "K", "M"],
                space: true,
              })}
              sx={{ paddingBottom: 0 }}
            ></Chip>
          </CardContent>
        </CardTag>
      )}
    </div>
  );
}
