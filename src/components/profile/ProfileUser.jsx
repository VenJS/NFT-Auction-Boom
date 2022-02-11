import classNames from "classnames";
import styles from './ProfileUser.module.scss';
import { Typography } from "@mui/material";
import Avatar from "../avatar/Avatar";

export default function ProfileUser({name,info,avatar,verified}) {
    return (
        <div className={classNames(styles['profile-user'])}>
            <Avatar></Avatar>
            <Typography variant="h3">{text}</Typography>
            <Typography variant="body1">{info}</Typography>
        </div>
    )
}