import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg";
import useInView from "../../hooks/useInView";
import { useState } from "react";
import BookingModal from "./BookingModal/BookingModal";

const Hero = () => {
  const { ref, visible } = useInView();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className={`${styles.hero} ${visible ? styles.visible : ""}`}
      id="hero"
      ref={ref}
    >
      <div className={`globalContentWrapper ${styles.wrapper}`}>
        <div className={styles.text}>
          <h1>Fast & Reliable Device Repair</h1>
          <p>
            Fixify helps you get your phone, tablet, or laptop repaired quickly
            and professionally. Quality service, guaranteed.
          </p>
          <button
            onClick={() => setIsModalOpen((prev) => !prev)}
            className={styles.cta}
          >
            Book a Repair
          </button>
        </div>

        <figure className={styles.imageWrapper}>
          <img
            width={740}
            height={494}
            src={heroImg}
            loading="lazy"
            alt="Technician repairing a device"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </figure>
      </div>
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};
export default Hero;
