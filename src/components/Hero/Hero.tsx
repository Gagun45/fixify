import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.text}>
        <h1>Fast & Reliable Device Repair</h1>
        <p>
          Fixify helps you get your phone, tablet, or laptop repaired quickly
          and professionally. Quality service, guaranteed.
        </p>
        <button className={styles.cta}>Book a Repair</button>
      </div>

      <div className={styles.imageWrapper}>
        <img src={heroImg} alt="Technician repairing a device" />
      </div>
    </section>
  );
};
export default Hero;
