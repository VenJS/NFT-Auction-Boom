import classNames from "classnames";
import styles from "./ProfileCollectionFilters.module.scss";
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

export default function ProfileCollectionFilters({filters}) {
  return (
    <div className={classNames(styles["profile-collection-filters"])}>
      Explore
      <FormControl className={classNames(styles["form-control"])}>
        <Select
          autoWidth="true"
          label="Sort by"
        >
          <InputLabel>{filters}</InputLabel>
        </Select>
      </FormControl>
      <FormControl className={classNames(styles["price-range"])}>
        <Select label="Price range"></Select>
      </FormControl>
      <TextField
        className={classNames(styles["search-bar"])}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <Search></Search>
            </InputAdornment>
          ),

        }}
        variant='standard'
      ></TextField>
    </div>
  );
}
