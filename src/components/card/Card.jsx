import millify from "millify";
import CardTag from "@mui/material/Card";
import Avatar from "../avatar/Avatar";
import Chip from "@mui/material/Chip";
import classNames from "classnames";
import styles from "./Card.module.scss";
import { Favorite } from "@mui/icons-material";
import Countdown from "react-countdown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function Card({
  name = "String",
  likes = 0,
  mediaUrl = "images/nft.jpg", 
  timeLeft = 100000000,
  user = {
    avatar: {
      url: "String",
    },
    verified: "Boolean",
  },
  price = "~12.2",
  currency = "ETH",
}) {
  
  
  return (
    <div> 
      {timeLeft ?
      <CardTag className={classNames(styles.card)}>
        <Avatar url="images/avatar.png" size="55px" />
        <img className={classNames(styles.media)} src={mediaUrl} />
        <div className={classNames(styles.badge)}>
          <FiberManualRecordIcon></FiberManualRecordIcon>
          <span>LIVE</span>
        </div>
        <div className={classNames(styles.container)}>
          {
            <div className={classNames(styles.countdown)}>
              <Countdown date={Date.now() + timeLeft}></Countdown>
            </div>
          }
          <div className={classNames(styles.title)}>{name}</div>
          <Chip
            className={classNames(styles.likes)}
            icon={<Favorite className={classNames(styles.icon)} />}
            clickable
            label={millify(likes)}
          ></Chip>
          <div className={classNames(styles.price)}>
            {price} {currency}
          </div>
        </div>
      </CardTag> : <CardTag className={classNames(styles.card)}>
        <Avatar url="images/avatar.png" size="55px" />
        <img className={classNames(styles.media)} src={mediaUrl} />
        <div className={classNames(styles.container)}>
          <div className={classNames(styles.title)}>{name}</div>
          <Chip
            className={classNames(styles.likes)}
            icon={<Favorite className={classNames(styles.icon)} />}
            clickable
            label={millify(likes)}
          ></Chip>
          <div className={classNames(styles.price)}>
            {price} {currency}
          </div>
        </div>
      </CardTag>}
      
    </div> )}  
    
  
 

