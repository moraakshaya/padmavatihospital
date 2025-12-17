import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

const departments = [
  "Cardiology",
  "General Medicine",
  "Diabetology",
  "Gastroenterology",
  "Pediatrics",
  "Neurology",
  "Pulmonology",
  "Orthopedics",
  "Nephrology",
  "General Surgery",
  "Anesthesiology",
  "Pathology",
  "Urology",
  "Dermatology",
  "Physiotherapy",
];

function Navbar() {
  const mobileMenuRef = useRef(null);
  const deptRef = useRef(null);
  const hamburgerRef = useRef(null);

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);

  /* ---------------- STICKY NAV ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- CLOSE MENU ---------------- */
  const closeMenu = () => {
    setMenuOpen(false);
    setDeptOpen(false);
  };

  /* ---------------- OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handleOutsideClick = (e) => {

      // Ignore hamburger / close icon click
      if (
        hamburgerRef.current &&
        hamburgerRef.current.contains(e.target)
      ) {
        return;
      }

      // Close mobile menu
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setDeptOpen(false);
      }

      // Close department dropdown only
      if (
        deptOpen &&
        deptRef.current &&
        !deptRef.current.contains(e.target)
      ) {
        setDeptOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen, deptOpen]);

  return (
    <header className={`navbar-wrapper ${sticky ? "sticky" : ""}`}>
      <nav className="navbar">
        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Hospital Logo" />
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="nav-links desktop-nav">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-active" : ""}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Doctors
            </NavLink>
          </li>

          <li className="dropdown">
            <span className="dropdown-title">
              Departments <FaChevronDown />
            </span>

            <div className="dropdown-menu">
              <div className="dropdown-grid">
                {departments.map((dept, index) => (
                  <NavLink
                    key={index}
                    to={`/departments/${dept.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) => isActive ? "nav-active" : ""}
                  >
                    {dept}
                  </NavLink>
                ))}
              </div>
            </div>
          </li>

          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink to="/testimonials" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Testimonials
            </NavLink>
          </li>

          <li>
            <NavLink to="/insurance" className={({ isActive }) => isActive ? "nav-active" : ""}>
              Insurance
            </NavLink>
          </li>

          <li className="contact-icon">
            <NavLink to="/contact">
              <FaPhoneAlt />
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER */}
        <div
          ref={hamburgerRef}
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${menuOpen ? "active" : ""}`}
      >
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/doctors" onClick={closeMenu}>Doctors</NavLink>

        {/* MOBILE DEPARTMENTS */}
        <div className="mobile-dept" ref={deptRef}>
          <span onClick={() => setDeptOpen(prev => !prev)}>
            Departments <FaChevronDown className={deptOpen ? "rotate" : ""} />
          </span>

          {deptOpen && (
            <div className="mobile-dept-list">
              {departments.map((dept, index) => (
                <NavLink
                  key={index}
                  to={`/departments/${dept.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={closeMenu}
                >
                  {dept}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/blog" onClick={closeMenu}>Blogs</NavLink>
        <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
        <NavLink to="/insurance" onClick={closeMenu}>Insurance</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
