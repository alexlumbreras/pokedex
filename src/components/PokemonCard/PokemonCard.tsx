import styles from "./PokemonCard.module.css";

type CardProps = {
  index: number;
  name: string;
  imageUrl: string;
  // types: string[];
  // weight: number;
  // height: number;
  // description: string;
};

export const PokemonCard: React.FC<CardProps> = ({ index, name, imageUrl }) => {
  const formattedIndex = `#${index.toString().padStart(3, "0")}`;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.header}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.index}>{formattedIndex}</p>
      </div>
      <div className={styles.content}>
        <img className={styles.image} src={imageUrl} alt={name} />
        <div className={styles.information}></div>
      </div>
    </div>
  );
};
