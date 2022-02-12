import classNames from "classnames";
import styles from "./ProfileCollection.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import Card from "../card/Card";
import User from "../user/User";

export default function ProfileCollection({
  user = { name: "J", info: "someInfo" },
  filters = "name",
  items = [
    {
      name: "String",
      likes: 0,
      user: "Jonny",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "BTC",
    },
    {
      name: "String",
      likes: 0,
      user: "Ronny",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "ETH",
    },
    {
      name: "String",
      likes: 0,
      user: "Tom",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "LTC",
    },
    {
      name: "String",
      likes: 0,
      user: "Mike",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "BNB",
    },
  ],
}) {
  return (
    <div className={classNames(styles["profile-collection"])}>
      <User name={user.name} info={user.info}></User>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h3">Collection</Typography>
        </Grid>
        <Grid item xs={9}>
          <ProfileCollectionFilters filters={filters}></ProfileCollectionFilters>
        </Grid>
      </Grid>
      <Grid container spacing={4} >
        <Grid item xs={3} className={classNames(styles['card-wrapper'])}>
          {items.map((item, i) => {
            return (
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
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
