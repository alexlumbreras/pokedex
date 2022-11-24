import styles from "../SearchBar/SearchBar.module.css";
import { SearchIcon } from "components/Icon/icons/SearchIcon";

export const SearchBar = () => (
  <div className={styles.searcherWrapper}>
    <SearchIcon color={"var(--medium-gray)"} />
    <input className={styles.searcher}></input>
  </div>
);
