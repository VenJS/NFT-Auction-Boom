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
import { useState } from "react";

export default function ExploreFilters({ filters = [], prices = [] }) {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  return (
    <div className={classNames(styles["explore-filters"])}>
      <FormControl className={classNames(styles.selectors)}>
        <InputLabel>Sort by</InputLabel>
        <Select
          className={classNames(styles.select)}
          value={value}
          onChange={handleChange}
        >
          {filters.map((arr, i) => {
            return <MenuItem key={i}>{arr.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <FormControl className={classNames(styles.selectors)}>
        <InputLabel>Price range</InputLabel>
        <Select className={classNames(styles.select)}>
          {prices.map((arr, i) => (
            <MenuItem key={i}>{arr.label}</MenuItem>
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
