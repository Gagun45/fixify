import useInView from "../../hooks/useInView";
import styles from "./Services.module.css";
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt size={40} className={styles.icon} />,
    title: "Smartphone Repair",
    description:
      "Broken screen or battery issues? We fix all major phone brands quickly and affordably.",
  },
  {
    icon: <FaLaptop size={40} className={styles.icon} />,
    title: "Laptop & PC Repair",
    description:
      "Hardware or software problems? Our certified technicians handle everything from upgrades to full diagnostics.",
  },
  {
    icon: <FaTabletAlt size={40} className={styles.icon} />,
    title: "Tablet Repair",
    description:
      "Get your tablet working like new again — we replace screens, batteries, and more for all models.",
  },
  {
    icon: <FaTools size={40} className={styles.icon} />,
    title: "Custom Services",
    description:
      "Need something specific? We offer device setup, data recovery, and custom technical solutions.",
  },
];

export default function Services() {
  const { ref, visible } = useInView();
  return (
    <section
      className={`${styles.services} fadeUp ${visible && "visible"}`}
      id="services"
      ref={ref}
    >
      <div className="globalContentWrapper">
        <h2>Our Services</h2>
        <ul className={styles.grid}>
          {services.map((service, idx) => (
            <li
              key={service.title}
              className={styles.card}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(15px)",
                transition: `opacity 0.5s ease ${
                  idx * 0.15
                }s, transform 0.5s ease ${idx * 0.15}s`,
              }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
