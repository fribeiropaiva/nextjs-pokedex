import styles from "./styles.module.scss";
import Link from "next/link";

export function Card({ images, name, id, type }) {
  return (
    <Link href={`/${id}`}>
      <article className={styles.container}>
        <img className={styles.image} src={images.small} alt={name} />
        <p className={styles.name}>Name: {name}</p>
        <p className={styles.type}>Type: {type}</p>
        <p className={styles.id}>Id: {id}</p>
      </article>
    </Link>
  );
}
