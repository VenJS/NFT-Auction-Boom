import classNames from "classnames";
import styles from "./ProfileCollection.module.scss";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import User from "../user/User";

export default function ProfileCollection({
  user = { name: "J", info: "someInfo" },
  filters,
  items = [],
}) {
  return (
    <div className={classNames(styles["profile-collection"])}>
      <User name={user.name} info={user.info}></User>
      <Grid container className={classNames(styles.container)}>
        <Grid item xs={3}>
          <Typography variant="h3">Collection</Typography>
        </Grid>
        <Grid item xs={9}>
          <ProfileCollectionFilters
            filters={filters}
          ></ProfileCollectionFilters>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {items.map((item, i) => {
          return (
            <Grid
              item
              xs={3}
              className={classNames(styles["card-wrapper"])}
              key={i}
            >
              <Card
                key={i}
                name={item.name}
                likes={item.likes}
                user={item.user}
                mediaUrl={item.mediaUrl}
                timeLeft={item.timeLeft}
                price={item.price}
                currency={item.currency}
              ></Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
