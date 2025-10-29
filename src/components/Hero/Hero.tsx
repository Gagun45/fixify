import styles from "./Hero.module.css";
import heroImg from "../../assets/hero.jpg";
import useInView from "../../hooks/useInView";

const Hero = () => {
  const { ref, visible } = useInView();
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
          <a href="#contact" className={styles.cta}>
            Book a Repair
          </a>
        </div>

        <div className={styles.imageWrapper}>
          <img
            width={740}
            height={494}
            src={heroImg}
            loading="lazy"
            alt="Technician repairing a device"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
