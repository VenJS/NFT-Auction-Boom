import classNames from "classnames";
import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({ items = [] }) {
  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack spacing={2} direction="column">
        {items.map((item, i) => (
          <ActivityListItem
            type={item.type}
            created_at={item.created_at}
            user={item.user}
            nft={item.nft}
            key={i}
          ></ActivityListItem>
        ))}
      </Stack>
    </div>
  );
}
