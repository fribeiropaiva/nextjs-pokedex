import { SearchBar } from "../SearchBar";
import styles from "./styles.module.scss";

export function Header({ filterPokemon }) {
  return (
    <header className={styles.header}>
      <SearchBar setChosenPokemon={filterPokemon} />
    </header>
  );
}
