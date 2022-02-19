import CollectorColumn from "./CollectorColumn";
import Header from "../header/Header";
import { Grid } from "@mui/material";
import { Select } from "@mui/material";
import classNames from "classnames";
import styles from "./TopCollectors.module.scss";
import { MenuItem } from "@mui/material";
import { Container } from "@mui/material";
import chunk from "lodash.chunk";

export default function TopCollectors({
  collectors = [
    {
      name: "G. K",
      nftsCount: "341",
      avatar: "String",
      verified: true,
    },
    {
      name: "Michael Poulsen",
      nftsCount: "168",
      avatar: "String",
      verified: true,
    },
    {
      name: "James Hetfield",
      nftsCount: "107",
      avatar: "String",
      verified: true,
    },
    {
      name: "Steven Tyler",
      nftsCount: 71,
      avatar: "String",
      verified: true,
    },
  ]
}) {
  const newArr = chunk(collectors, 1)

  return (
    
    <div>
      <Container className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Top Collectors</div>
        <Select className={classNames(styles.select)}>
          <MenuItem value={10} label="this week">
            This week
          </MenuItem>
        </Select>
      </Container>
      <Grid container className={classNames(styles.container)}>
        {newArr.map((arr, i) => (<CollectorColumn key={i} index={arr[i]} name = {arr.name}></CollectorColumn>))}
      </Grid>
    </div>
  );
}
