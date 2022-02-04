import Card from "../card/Card";
import { MenuItem, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import classNames from "classnames";
import styles from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <div>
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <Select className={classNames(styles.select)}>
          <MenuItem value={10} label="this week">
            This week
          </MenuItem>
        </Select>
      </Container>
      <Grid container spacing={1} className={classNames(styles.container)}>
        <Grid item xs={3}>
          <Card
            name="Bored Ape"
            likes="500"
            mediaUrl="https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
            price="~8.2"
            currency="SOL"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Gringo"
            likes="327"
            mediaUrl="https://images.theconversation.com/files/417198/original/file-20210820-25-1j3afhs.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            price="~11.2"
            currency="KSM"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Mona Who"
            likes="14"
            mediaUrl="https://i.guim.co.uk/img/media/3c90fbf9666d4e73be1122eb33afed235db41b1f/0_0_5000_3000/master/5000.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=3f8c0729394152d5c02098a0eb76defb"
            price="~1.2"
            currency="LTC"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Fashion Ape"
            likes="808"
            mediaUrl="https://media.voguebusiness.com/photos/61b8dfb99ba90ab572dea0bd/3:4/w_1998,h_2664,c_limit/adidas-nft-voguebus-adidas-nft-dec-21-story.jpg"
            price="~34.2"
            currency="ETH"
          />
        </Grid>
      </Grid>
    </div>
  );
}
