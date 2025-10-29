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
          <span>123 Repair Street, Techville, Germany</span>
        </li>
        <li>
          <FaPhoneAlt className={styles.icon} />
          <a href="tel:+491234567890">+49 123 4567890</a>
        </li>
        <li>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:selyanchyn45@gmail.com">selyanchyn45@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};
export default TextContainer;
