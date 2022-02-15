import classNames from "classnames";
import styles from "./ActivityList.module.scss";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({
  items = [
    {
      created_at: "2022-02-06T22:18:15",
      user: {
        avatar: {
          url: 'String',
        },
        verified: true,
        name: 'String',
      },
      nft: {
        name: 'String',
        owner: {
          username: 'String',
          avatar: {
            url: 'String',
          },
          verified: true,
        },
      },
      type: "buy",
    },
    {
      created_at: "2022-02-14T22:18:15",
      user: {
        avatar: {
          url: 'String',
        },
        verified: true,
        name: 'String',
      },
      nft: {
        name: 'String',
        owner: {
          username: 'String',
          avatar: {
            url: 'String',
          },
          verified: true,
        },
      },
      type: "buy",
    },
    {
      created_at: "2022-02-09T22:18:15",
      user: {
        avatar: {
          url: 'String',
        },
        verified: true,
        name: 'String',
      },
      nft: {
        name: 'String',
        owner: {
          username: 'String',
          avatar: {
            url: 'String',
          },
          verified: true,
        },
      },
      type: "like",
    },
  ],
}) {
  items.map((item, i) => { console.log(item.type)})
  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack spacing={2} direction="column">
        {items.map((item, i) => 
           <ActivityListItem type={item.type} key={i}></ActivityListItem>
      )}
      </Stack>
    </div>
  );
}
