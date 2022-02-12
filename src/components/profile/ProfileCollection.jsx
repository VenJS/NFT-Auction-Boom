import classNames from "classnames";
import styles from './ProfileCollection.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import ProfileCollectionFilters from './ProfileCollectionFilters';
import Card from '../card/Card'

export default function ProfileCollection({user, filter, items = [{
    name: "String",
    likes: 0,
    user: 'Jonny',
    mediaUrl: "images/nft.jpg", 
    timeLeft: 100000000,
    price: "~12.2",
    currency: "BTC",
  },
  {
    name: "String",
    likes: 0,
    user: 'Ronny',
    mediaUrl: "images/nft.jpg", 
    timeLeft: 100000000,
    price: "~12.2",
    currency: "ETH",
  },
  {
    name: "String",
    likes: 0,
    user: 'Tom',
    mediaUrl: "images/nft.jpg", 
    timeLeft: 100000000,
    price: "~12.2",
    currency: "LTC",
  },
  {
    name: "String",
    likes: 0,
    user: 'Mike',
    mediaUrl: "images/nft.jpg", 
    timeLeft: 100000000,
    price: "~12.2",
    currency: "BNB",
  }]}) {
    return (
        <div className={classNames(styles['profile-collection'])}>
            <Grid container>
                <Grid item xs={3}><Typography variant="h3">Collection</Typography></Grid>
                <Grid item xs={9}><ProfileCollectionFilters></ProfileCollectionFilters></Grid>
            </Grid>
            <Grid container>
                <Grid item xs={3}><Card user={items[0].user} currency={items[0].currency}></Card></Grid>
                <Grid item xs={3}><Card user={items[1].user} currency={items[1].currency}></Card></Grid>
                <Grid item xs={3}><Card user={items[2].user} currency={items[2].currency}></Card></Grid>
                <Grid item xs={3}><Card user={items[3].user} currency={items[3].currency}></Card></Grid>
                
            </Grid>
        </div>
    )
}