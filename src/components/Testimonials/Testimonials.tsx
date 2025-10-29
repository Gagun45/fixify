import useInView from "../../hooks/useInView";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sophie Müller",
    text: "Fixify repaired my phone screen in less than an hour — looks brand new! Fantastic service.",
  },
  {
    name: "Lukas Schneider",
    text: "Professional, quick, and transparent pricing. Highly recommend Fixify for any repair needs.",
  },
  {
    name: "Hannah Weber",
    text: "The staff was super friendly, and they even picked up my laptop from home. Five stars!",
  },
];

export default function Testimonials() {
  const { ref, visible } = useInView();
  return (
    <section
      className={`${styles.testimonials} fadeUp ${visible && "visible"}`}
      id="testimonials"
      ref={ref}
    >
      <div className="globalContentWrapper">
        <h2>What Our Customers Say</h2>
        <ul className={styles.list}>
          {testimonials.map((t, idx) => (
            <li
              key={t.name}
              className={styles.card}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s ease ${
                  idx * 0.15
                }s, transform 0.6s ease ${idx * 0.15}s`,
              }}
            >
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <span className={styles.author}>— {t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
