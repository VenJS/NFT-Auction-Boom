import { Select } from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import { MenuItem } from "@mui/material";
import Card from "../card/Card";

export default function Auctions({ cards = [] }) {
  return (
    <div>
      <Container className={classNames(styles.container)}>
        <div className={classNames(styles.wrapper)}>
          <LocalFireDepartmentIcon
            color="error"
            fontSize="large"
          ></LocalFireDepartmentIcon>
          <h1 className={classNames(styles.liveAuction)}>Live Auctions</h1>
        </div>
        <Select className={classNames(styles.select)}>
          <MenuItem label="This week" value={10}>
            This week
          </MenuItem>
        </Select>
      </Container>
      <Grid container spacing={1} className={classNames(styles.cardContainer)}>
        <Grid item xs={3}>
          <Card
            name="Hollywood Reporter"
            likes={188}
            mediaUrl="https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg?w=681&h=383&crop=1"
            price="~5.2"
            currency="SOL"
          ></Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Bubbly"
            likes={47}
            mediaUrl="https://miro.medium.com/max/980/1*3iesg_sr8kC6NYN2iiFHRQ.png"
            price="~18.2"
            currency="BNB"
          ></Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Alien in New York"
            likes={89}
            mediaUrl="https://static.euronews.com/articles/stories/06/28/65/60/400x225_cmsv2_4ce73953-fe00-5c59-a04e-4a5edbb6f750-6286560.jpg"
            price="~11"
            currency="LTC"
          ></Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            name="Reptile"
            likes={1411}
            mediaUrl="https://www.thehindu.com/entertainment/art/ph95wn/article35362273.ece/alternates/FREE_615/Dhanya-Ajith2021Artontwitter"
            price="~8.2"
            currency="SOL"
          ></Card>
        </Grid>
      </Grid>
    </div>
  );
}
