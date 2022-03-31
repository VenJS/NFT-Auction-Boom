import classNames from "classnames";
import styles from "./ActivityFilters.module.scss";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function ActivityFilters({ filters = [] }) {
  return (
    <div className={classNames(styles["activity-filters"])}>
      <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel>Sort by</InputLabel>
        <Select className={classNames(styles.select)}>
          {filters.map((arr, i) => (
            <MenuItem key={i}>{arr.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel>Type</InputLabel>
        <Select className={classNames(styles.select)}>
          {filters.map((arr, i) => (
            <MenuItem key={i}>{arr.value}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        className={classNames(styles["search-bar"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search></Search>
            </InputAdornment>
          ),
        }}
        variant="standard"
      ></TextField>
    </div>
  );
}
