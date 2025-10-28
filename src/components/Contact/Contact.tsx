import styles from "./Contact.module.css";
import FormContainer from "./FormContainer/FormContainer";
import TextContainer from "./TextContainer/TextContainer";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="globalContentWrapper">
        <h2>Get in Touch</h2>
        <div className={styles.grid}>
          <TextContainer />
          <FormContainer />
        </div>
      </div>
    </section>
  );
}
