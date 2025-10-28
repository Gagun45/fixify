import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert(
          "Thanks for your message! 👋\n\nThis is just a demo frontend app — the form doesn`t actually submit data."
        );
        (e.target as HTMLFormElement).reset();
      }}
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows={4} placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};
export default FormContainer;
