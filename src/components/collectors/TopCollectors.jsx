import React from "react";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import array from "lodash/array";

export default function TopCollectors({ collectors, filter = [] }) {
  return (
    <Container maxWidth="xl">
      <Grid container className={classNames(styles.header)}>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Typography variant="h1">Top Collectors</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={6}
          style={{ justifyContent: "flex-end", display: "flex" }}
        >
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select>
              {filter.map((arr, i) => (
                <MenuItem key={i}>{arr.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container gap={2}>
        {array.chunk(collectors, 3).map((collector, i) => (
          <CollectorColumn key={i} items={collector} index={collector.index} />
        ))}
      </Grid>
    </Container>
  );
}
