import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const color = "white";
const useStyles = makeStyles(() => ({
  icon: {
    fill: color,
  },
}));

export default function ActivityFilters({ filters = [] }) {
  const [sortValue, setSortValue] = useState("");

  const handleChange = (event) => setSortValue(event.target.value);

  const classes = useStyles();

  return (
    <div className={classNames(styles["activity-filters"])}>
      <FormControl className={classNames(styles.select)}>
        <InputLabel>Sort by</InputLabel>
        <Select value={sortValue} onChange={handleChange}>
          {filters.map((arr, i) => (
            <MenuItem key={i} value={i}>
              {arr.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classNames(styles.select)}>
        <InputLabel>Type</InputLabel>
        <Select value={sortValue} onChange={handleChange}>
          {filters.map((arr, i) => (
            <MenuItem key={i} value={i}>
              {arr.value}
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
      ></TextField>
    </div>
  );
}
