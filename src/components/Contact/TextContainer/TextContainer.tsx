import styles from "./TextContainer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const TextContainer = () => {
  return (
    <div className={styles.info}>
      <p>
        Have questions or need a quick repair estimate? Reach out — we’re happy
        to help!
      </p>

      <ul className={styles.details}>
        <li>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Waldstraße 37, 93161 Sinzing, Germany</span>
        </li>
        <li>
          <FaPhoneAlt className={styles.icon} />
          <a href="tel:+4915140164020">+49 151 40164020</a>
        </li>
        <li>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:denys@qafy.info">denys@qafy.info</a>
        </li>
      </ul>
    </div>
  );
};
export default TextContainer;
