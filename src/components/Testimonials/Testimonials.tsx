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
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="globalContentWrapper">
        <h2>What Our Customers Say</h2>
        <ul className={styles.list}>
          {testimonials.map((t) => (
            <li key={t.name} className={styles.card}>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <span className={styles.author}>— {t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
