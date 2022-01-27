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
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
    },
    {
      name: "String",
      nftsCount: "Number",
      avatar: "String",
      verified: "Boolean",
    },
  ],
}) {
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
      <Grid container>
        {collectors.map((collector, id) => (
          <CollectorColumn key={id} id={id}>
            asdasdsadsa
          </CollectorColumn>
        ))}
      </Grid>
    </div>
  );
}
