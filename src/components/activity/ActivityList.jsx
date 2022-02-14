import classNames from "classnames";
import styles from './ActivityList.module.scss';
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList() {
    return (
        <div className={classNames(styles['activity-list'])}>
            <Stack spacing={2}>
                <ActivityListItem created_at = "2022-02-11T22:18:15" type = "buy"></ActivityListItem>
                <ActivityListItem created_at = "2022-02-12T22:18:15" type="like"></ActivityListItem>
                <ActivityListItem created_at = "2022-02-14T22:18:15" type="like"></ActivityListItem>
            </Stack>
        </div>
    )
}