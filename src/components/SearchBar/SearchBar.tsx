import styles from "../SearchBar/SearchBar.module.css";
import SearchIcon from "../../assets/images/Search-icon.svg";
import React, { useState } from "react";

type SearchBarProps = {
  onSearch(inputValue: string): void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(inputValue);
    }
  };

  return (
    <div className={styles.searcherWrapper}>
      <img src={SearchIcon} alt="Search-Icon" />
      <input
        className={styles.searcher}
        type="text"
        placeholder="Busca un Pokemon"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
};
