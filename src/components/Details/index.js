import { useState } from "react";
import styles from "./styles.module.scss";
import Modal from "react-modal";

export function Details({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attack, setAttack] = useState({});

  function openModal(attack) {
    setIsModalOpen(true);
    setAttack(attack);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <h1 className={styles.title}>Details</h1>
      <section className={styles.container}>
        <div className={styles.content}>
          <img src={data?.images?.large} alt={data?.name} />
          <div className={styles.text}>
            <div>
              <h3>Name</h3>
              <p>{data?.name}</p>
              <p>ID: {data?.id}</p>
            </div>
            {data?.types && (
              <div>
                <h3>Types</h3>
                {data?.types?.map((type) => (
                  <p key={type}>{type}</p>
                ))}
              </div>
            )}
            {data?.resistances && (
              <div>
                <h3>Resistances</h3>
                {data?.resistances?.map((resistance) => (
                  <p key={resistance?.type}>{resistance?.type}</p>
                ))}
              </div>
            )}
            {data?.weaknesses && (
              <div>
                <h3>Weakenesses</h3>
                {data?.weaknesses?.map((weakness) => (
                  <p key={weakness?.type}>{weakness?.type}</p>
                ))}
              </div>
            )}
            {data?.attacks && (
              <div className={styles.attacks}>
                <h3>Attacks</h3>
                {data?.attacks?.map((attack) => (
                  <button onClick={() => openModal(attack)} key={attack?.type}>
                    {attack?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.innerContainer}>
          <h1>{attack.name}</h1>
          <p>
            <span>Cost:</span> {attack.convertedEnergyCost}
          </p>
          <p>
            <span>Damage:</span> {attack.damage}
          </p>
          <p>
            <span>Description:</span> {attack.text}
          </p>
        </div>
      </Modal>
    </>
  );
}
