import { useState } from "react";
import styles from "./styles.module.scss";

export function SearchBar({ setChosenPokemon }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearch() {
    setSearchInput("");
    setChosenPokemon(searchInput);
  }

  return (
    <>
      <input
        className={styles.searchBar}
        type="text"
        value={searchInput}
        onChange={handleInputChange}
      ></input>
      <button className={styles.searchButton} onClick={() => handleSearch()}>
        Search
      </button>
    </>
  );
}
