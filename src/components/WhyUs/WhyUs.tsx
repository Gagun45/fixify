import styles from "./WhyUs.module.css";
import icon1 from "../../assets/fast.svg";
import icon2 from "../../assets/quality.svg";
import icon3 from "../../assets/support.svg";

const features = [
  {
    icon: icon1,
    title: "Fast Repairs",
    description: "Get your devices fixed quickly without compromising quality.",
  },
  {
    icon: icon2,
    title: "Certified Technicians",
    description:
      "Our team is trained and certified to handle all devices safely.",
  },
  {
    icon: icon3,
    title: "24/7 Support",
    description: "We’re always available to help with questions and updates.",
  },
];

const WhyUs = () => {
  return (
    <section className={styles.whyUs} id="why-us">
      <h2>Why Choose Fixify</h2>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.card}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
