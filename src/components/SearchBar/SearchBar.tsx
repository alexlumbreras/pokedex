import styles from "../SearchBar/SearchBar.module.css";
import SearchIcon from "../../assets/images/Search-icon.svg";

export const SearchBar = () => (
  <div className={styles.searcherWrapper}>
    <img src={SearchIcon} alt="Search-Icon" />
    <input className={styles.searcher}></input>
  </div>
);
