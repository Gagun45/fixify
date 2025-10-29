import useInView from "../../hooks/useInView";
import styles from "./Contact.module.css";
import FormContainer from "./FormContainer/FormContainer";
import TextContainer from "./TextContainer/TextContainer";

export default function Contact() {
  const { ref, visible } = useInView();
  return (
    <section
      className={styles.contact}
      id="contact"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
      ref={ref}
    >
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
