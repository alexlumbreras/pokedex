import styles from "./Footer.module.css";
import GitHubLogo from "../../assets/images/github-logo.svg";
import PokeApiLogo from "../../assets/images/pokeapi-logo.svg";

export const Footer = () => (
  <div className={styles.footerWrapper}>
    <img className={styles.logo} src={GitHubLogo} alt="Github Logo" />
    <img className={styles.logo} src={PokeApiLogo} alt="PokeApi Logo" />
  </div>
);
