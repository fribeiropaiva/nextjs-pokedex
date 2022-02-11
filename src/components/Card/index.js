import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export function Card({ images, name, id, types }) {
  const typesText = types.join(", ");
  return (
    <Link href={`/${id}`} passHref>
      <article className={styles.container}>
        <div className={styles.image}>
          <Image
            layout="fill"
            objectFit="contain"
            src={images.small}
            alt={name}
          />
        </div>
        <p className={styles.name}>Name: {name}</p>
        <p className={styles.type}>Type: {typesText}</p>
        <p className={styles.id}>Id: {id}</p>
      </article>
    </Link>
  );
}
