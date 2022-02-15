import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";
import {
  Stack,
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import Search from "@mui/icons-material/Search";

export default function ExploreFilters({ filters }) {
  return (
    <div className={classNames(styles["explore-filters"])}>
      <FormControl className={classNames(styles.selectors)}>
        <Select label="Sort by" className={classNames(styles.select)}>
        <InputLabel>{filters}</InputLabel>
        </Select>
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
      </FormControl>
    </div>
  );
}
