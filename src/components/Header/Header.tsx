import styles from "../Header/Header.module.css";
import PokeballIcon from "../../assets/images/Pokeball.svg";

export const Header = () => (
  <div className={styles.headerWrapper}>
    <div className={styles.header}>
      <img className={styles.image} src={PokeballIcon} alt="Pokeball-Icon" />
      <h1 className={styles.title}>My Pokédex</h1>
    </div>
  </div>
);
