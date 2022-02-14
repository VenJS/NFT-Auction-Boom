import classNames from "classnames";
import styles from './ProfileUser.module.scss';
import { Typography } from "@mui/material";
import Avatar from "../avatar/Avatar";

export default function ProfileUser({name,info,avatar,verified}) {
    return (
        <div className={classNames(styles['profile-user'])}>
            <Avatar url={avatar} verified={verified} className={classNames(styles.avatar)} sx={{ width: 100, height: 100 }}></Avatar>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{info}</Typography>
        </div>
    )
}