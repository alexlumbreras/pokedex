import { HeightIcon } from "components/Icon/icons/HeightIcon";
import { WeightIcon } from "components/Icon/icons/WeightIcon";
import { Tag } from "components/Tag/Tag";
import styles from "./PokemonCard.module.css";

type CardProps = {
  index: number;
  name: string;
  imageUrl: string;
  types: string[];
  weight: number;
  height: number;
  description: string;
};

export const PokemonCard: React.FC<CardProps> = ({
  index,
  name,
  imageUrl,
  types,
  weight,
  height,
  description,
}) => {
  const formattedIndex = `#${index.toString().padStart(3, "0")}`;

  return (
    <div className={styles.cardWrapper}
      style={{
      backgroundColor: `var(--type-${types[0]}`,
    }}>
      <div className={styles.header}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.index}>{formattedIndex}</p>
      </div>

      <div className={styles.content}>
        <img className={styles.image} src={imageUrl} alt={name} />
        <div className={styles.information}>
          <div className={styles.types}>
            {types.map((type: string, tagIndex: number) => (
              <Tag key={`card-type-${tagIndex}`} color={type}>
                {type}
              </Tag>
            ))}
          </div>

          <p
            className={styles.about}
            style={{
              color: `var(--type-${types[0]}`,
            }}
          >
            About
          </p>

          <div className={styles.measures}>
            <div className={styles.measure}>
              <div className={styles.measureData}>
                <WeightIcon color={`var(--dark-gray)`} />
                {`${weight} kg`}
              </div>
              <p className={styles.measureName}>Weight</p>
            </div>

            <div className={styles.measure}>
              <div className={styles.measureData}>
                <HeightIcon color={`var(--dark-gray)`} />
                {`${height} m`}
              </div>
              <p className={styles.measureName}>Height</p>
            </div>
          </div>

          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
