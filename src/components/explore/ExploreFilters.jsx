import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Search from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const color = "white";
const useStyles = makeStyles(() => ({
  icon: {
    fill: color,
  },
}));

export default function ExploreFilters({ filters = [], prices = [] }) {
  const classes = useStyles();

  const [value, setValue] = useState();
  const [nftFilters, setNftFilters] = useState();
  const [nftPrices, setNftPrices] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters.sort);
    setNftFilters(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters.price);
    setNftPrices(result);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classNames(styles["explore-filters"])}>
      <FormControl className={classNames(styles.selectors)}>
        <InputLabel>Sort by</InputLabel>
        <Select
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          value={value}
          onChange={handleChange}
        >
          {filters.map((arr, i) => {
            return (
              <MenuItem key={i} value={i}>
                {arr.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl className={classNames(styles.selectors)}>
        <InputLabel>Price range</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {prices.map((arr, i) => (
            <MenuItem key={i} value={i}>
              {arr.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={classNames(styles["search-bar"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "white" }}></Search>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{ backgroundColor: "#181828", borderRadius: "20px" }}
      ></TextField>
    </div>
  );
}
