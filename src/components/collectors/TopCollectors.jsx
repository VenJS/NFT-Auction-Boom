import React from "react";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import array from "lodash/array";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const color = "white";
const useStyles = makeStyles(() => ({
  icon: {
    fill: color,
  },
}));

export default function TopCollectors({ collectors, filter = [] }) {
  const [val, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <div style={{ margin: "150px 50px 250px 50px" }}>
      <Container maxWidth="false">
        <Grid container>
          <Grid item xs={6} style={{ marginBottom: "50px" }}>
            <Typography variant="h1">Top Collectors</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>Sort by</InputLabel>
              <Select
                value={val}
                onChange={handleChange}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                {filter.map((arr, i) => (
                  <MenuItem key={i} value={i}>
                    {arr.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          className={classNames(styles.elements)}
        >
          {array.chunk(collectors).map((collector, i) => {
            return (
              <Grid item xs={3} key={i}>
                <CollectorColumn
                  items={collector}
                  index={i + 1}
                  className={classNames(styles.row)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
