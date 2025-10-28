import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={`globalContentWrapper ${styles.wrapper}`}>
        <div className={styles.text}>
          <h1>Fast & Reliable Device Repair</h1>
          <p>
            Fixify helps you get your phone, tablet, or laptop repaired quickly
            and professionally. Quality service, guaranteed.
          </p>
          <a href="#contact" className={styles.cta}>
            Book a Repair
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img src={heroImg} alt="Technician repairing a device" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
