import { FaBolt, FaHeadset, FaUserCheck, FaWallet } from "react-icons/fa6";
import styles from "./WhyUs.module.css";

const features = [
  {
    icon: <FaBolt className={styles.icon} />,
    title: "Fast Repairs",
    description: "Get your devices fixed quickly without compromising quality.",
  },
  {
    icon: <FaUserCheck className={styles.icon} />,
    title: "Certified Technicians",
    description:
      "Our team is trained and certified to handle all devices safely.",
  },
  {
    icon: <FaHeadset className={styles.icon} />,
    title: "24/7 Support",
    description: "We’re always available to help with questions and updates.",
  },
  {
    icon: <FaWallet className={styles.icon} />,
    title: "Affordable Prices",
    description: "High-quality repairs without breaking the bank.",
  },
];

const WhyUs = () => {
  return (
    <section className={styles.whyUs} id="why-us">
      <div className="globalContentWrapper">
        <h2>Why Choose Fixify</h2>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature.title} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
