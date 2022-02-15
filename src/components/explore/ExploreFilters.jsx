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

export default function ExploreFilters({
  filters
}) {
  return (
    <div className={classNames(styles["explore-filters"])}>
      <Stack>
        <FormControl className={classNames(styles.selectors)}>
          <InputLabel>{filters.sort}</InputLabel>
          <Select
            label="Sort by"
            className={classNames(styles.select)}
          ></Select>
          <InputLabel>{filters.price}</InputLabel>
          <Select
            label="Price Range"
            className={classNames(styles.select)}
          ></Select>
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
        </FormControl>
      </Stack>
    </div>
  );
}
