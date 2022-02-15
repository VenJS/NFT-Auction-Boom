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
      <Stack direction="row">
        <FormControl>
          <Select autoWidth="true" label="Sort by"></Select>
        </FormControl>
        <FormControl>
          <Select label="Price range"></Select>
        </FormControl>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search></Search>
              </InputAdornment>
            ),
          }}
          variant="standard"
        >
          <InputLabel>{filters}</InputLabel>
          <MenuItem></MenuItem>
        </TextField>
      </Stack>
    </div>
  );
}
