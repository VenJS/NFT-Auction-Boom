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

export default function ActivityFilters() {
  return (
    <div className={classNames(styles["activity-filters"])}>
      Activity
      <div className={classNames(styles.selectors)}>
        <Select label="Sort by" className={classNames(styles.select)}></Select>
        <Select label="Type" className={classNames(styles.select)}></Select>
        <TextField
          className={classNames(styles["search-bar"])}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            ),
          }}
          variant='standard'
        ></TextField>
      </div>
    </div>
  );
}
