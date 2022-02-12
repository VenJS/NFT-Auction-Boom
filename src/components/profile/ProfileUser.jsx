import classNames from "classnames";
import styles from './ProfileUser.module.scss';
import { Typography } from "@mui/material";
import Avatar from "../avatar/Avatar";

export default function ProfileUser({name,info,avatar='https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png',verified}) {
    return (
        <div className={classNames(styles['profile-user'])}>
            <Avatar url={avatar} verified={verified}></Avatar>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="body1">{info}</Typography>
        </div>
    )
}