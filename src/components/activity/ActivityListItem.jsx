import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import { formatDistance, parseISO } from "date-fns";

export default function ActivityListItem({
  created_at = "2022-02-06T22:18:15",
  user = {
    avatar: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkXX6ehXfa-zzSjkEQjne-NTk9Qkh2HtqXQ&usqp=CAU",
    },
    verified: true,
    name: "Gordon",
  },
  nft = {
    name: "Dog",
    owner: {
      username: "Antonio",
      avatar: {
        url: "String",
      },
      verified: true,
    },
  },
  type = "buy",
}) {
  return (
    <div className={classNames(styles["activity-list-item"])}>
      <div className={classNames(styles.wrapper)}>
        <Avatar verified={user.verified} url={user.avatar.url}></Avatar>
        <div className={classNames(styles.content)}>
          <span className={classNames(styles.owner)}>{nft.owner.username}</span>
          {type == "like" ? (
            <span className={classNames(styles.liked)}> liked </span>
          ) : (
            <span className={classNames(styles.liked)}> bought </span>
          )}
          <Link href="/" className={classNames(styles.link)}>
            {nft.name}
          </Link>
          <span className={classNames(styles.liked)}> by</span>
          <Link href="/" className={classNames(styles.link)}>
            {nft.owner.username}
          </Link>
        </div>
      </div>
      <div className={classNames(styles.date)}>
        {formatDistance(parseISO(created_at), new Date())} ago
      </div>
    </div>
  );
}
