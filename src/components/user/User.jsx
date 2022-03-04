import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({
  name = "sdad",
  info = "asdsa",
  avatar = "images/avatar.png",
  size = 55,
  verified = true,
}) {
  return (
    <div className={classNames(styles.user)}>
      <Avatar url={avatar} verified={verified} />
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.name)}>{name}</div>
        <div className={classNames(styles.info)}>{info}</div>
      </div>
    </div>
  );
}
