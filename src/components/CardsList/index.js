import { Card } from "../Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./styles.module.scss";

export function CardsList({ cards }) {
  return (
    <>
      <section className={styles.container}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
      <Carousel showThumbs={false} showIndicators={false}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Carousel>
    </>
  );
}
