import { useState, useEffect } from "react";
import './CSS/style.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* Logo */}
      <div className="navbar__logo" onClick={() => handleScrollTo("home")}>
        V
      </div>

      {/* Desktop links — centred */}
      <nav className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}>
        <ul className="navbar__links">
          <li><button onClick={() => handleScrollTo("home")}>Home</button></li>
          <li><button onClick={() => handleScrollTo("about")}>About</button></li>
          <li><button onClick={() => handleScrollTo("project")}>Projects</button></li>
          <li><button onClick={() => handleScrollTo("achievement")}>Achievements</button></li>
          <li><button onClick={() => handleScrollTo("contact")}>Contact</button></li>
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

    </header>
  );
};

export default Nav;
