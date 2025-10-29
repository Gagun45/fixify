import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./BookingModal.module.css";
import { FaX } from "react-icons/fa6";
import { createPortal } from "react-dom";

interface Props {
  onClose: () => void;
}

const BookingModal = ({ onClose }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    device: "",
    issue: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.device ||
      !formData.issue ||
      !formData.name
    ) {
      alert("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ date: "", device: "", issue: "", name: "" });
    }, 2000);
  };
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          aria-label="Close modal"
          className={styles.close}
          onClick={onClose}
        >
          <FaX />
        </button>
        {submitted ? (
          <p className={styles.success}>
            ✅ Booking request sent successfully!
          </p>
        ) : (
          <>
            <h2>Book a Repair</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                autoFocus
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="device"
                placeholder="Device type"
                value={formData.device}
                onChange={handleChange}
              />
              <textarea
                name="issue"
                placeholder="Describe the issue"
                value={formData.issue}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};
export default BookingModal;
