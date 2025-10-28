import { useState } from "react";
import styles from "./Header.module.css";
import { MdMenu } from "react-icons/md";

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
      <div className={`globalContentWrapper ${styles.wrapper}`}>
        <a href="#" className={styles.logo}>
          Fixify
        </a>

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

        {/* Mobile menu button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          <MdMenu />
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
      </div>
    </header>
  );
};
export default Header;
