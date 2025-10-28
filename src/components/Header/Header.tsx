import { useState } from "react";
import styles from "./Header.module.css";

interface Link {
  href: string;
  label: string;
}

const LINKS: Link[] = [
  { href: "#why-us", label: "Why us" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Fixify</span>

      {/* Desktop navigation */}
      <nav className={styles.nav} aria-label="Main navigation">
        <ul>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>Book Repair</button>

      {/* Mobile menu button */}
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <ul>
            {LINKS.map((link) => (
              <li key={link.label}>
                <a onClick={closeMenu} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className={styles.cta} onClick={closeMenu}>
                Book Repair
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
