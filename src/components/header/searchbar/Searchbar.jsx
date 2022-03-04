import SearchIcon from "@mui/icons-material/Search";
import styles from "./Searchbar.module.scss";
import classNames from "classnames";

export default function Searchbar({ placeholder }) {
  return (
    <div>
      <div className={classNames(styles.searchInput)}>
        <SearchIcon />
        <input
          className={classNames(styles.search)}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
