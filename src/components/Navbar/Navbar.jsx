import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import departmentsData from "../../data/departmentsinglepagedata";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // ⭐ WRAPPER REF (icon + menu together)
  const mobileWrapperRef = useRef(null);

  // ⭐ Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileWrapperRef.current &&
        !mobileWrapperRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
        setMoreDropdownOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Prevent desktop dropdown overflow
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      const dropdown = dropdownRef.current;
      const rect = dropdown.getBoundingClientRect();

      if (rect.right > window.innerWidth) {
        dropdown.style.left = "auto";
        dropdown.style.right = "0";
      } else {
        dropdown.style.left = "0";
        dropdown.style.right = "auto";
      }
    }
  }, [dropdownOpen]);

  return (
    <nav className="pmc-navbar">
      <div className="pmc-container">

        {/* LOGO */}
        <Link to="/" className="pmc-logo">
          <img src="/padmavathilogo.png" alt="Padmavati Medical Center" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="pmc-nav-links desktop-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>

          {/* DESKTOP DEPARTMENTS */}
          <li
            className="pmc-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className={`dropbtn ${dropdownOpen ? "active" : ""}`}>
              Departments ▾
            </span>

            <div
              ref={dropdownRef}
              className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
            >
              <div className="grid-4">
                {departmentsData.map((dept) => (
                  <Link key={dept.id} to={`/departments/${dept.slug}`}>
                    {dept.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li><Link to="/contact">Contact</Link></li>

          {/* DESKTOP MORE */}
          <li
            className="pmc-dropdown"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <span className={`dropbtn ${moreDropdownOpen ? "active" : ""}`}>
              More ▾
            </span>

            <div
              className={moreDropdownOpen ? "dropdown-menu show" : "dropdown-menu"}
            >
              <div className="grid-2">
                <Link to="/gallery">Gallery</Link>
                <Link to="/insurance">Insurance</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/testimonials">Testimonials</Link>
              </div>
            </div>
          </li>

          <li>
            <Link to="/bookappoinment" className="appointment-btn">
              Book Appointment
            </Link>
          </li>
        </ul>

        {/* ⭐ MOBILE MENU WRAPPER */}
        <div ref={mobileWrapperRef} className="mobile-menu-wrapper">

          {/* MOBILE ICON */}
          <div
            className="pmc-menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>

          {/* MOBILE MENU */}
          <ul
            className={
              menuOpen
                ? "pmc-nav-links mobile-menu show"
                : "pmc-nav-links mobile-menu"
            }
          >
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link></li>

            {/* MOBILE DEPARTMENTS */}
            <li
              className="mobile-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span className={`mobile-dropbtn ${dropdownOpen ? "active" : ""}`}>
                Departments ▾
              </span>

              <ul className={dropdownOpen ? "mobile-submenu show" : "mobile-submenu"}>
                {departmentsData.map((dept) => (
                  <li key={dept.id}>
                    <Link
                      to={`/departments/${dept.slug}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {dept.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

            {/* MOBILE MORE */}
            <li
              className="mobile-dropdown"
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
            >
              <span className={`mobile-dropbtn ${moreDropdownOpen ? "active" : ""}`}>
                More ▾
              </span>

              <ul className={moreDropdownOpen ? "mobile-submenu show" : "mobile-submenu"}>
                <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
                <li><Link to="/insurance" onClick={() => setMenuOpen(false)}>Insurance</Link></li>
                <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
                <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
              </ul>
            </li>

            <li>
              <Link
                to="/bookappoinment"
                className="appointment-mobile-btn"
                onClick={() => setMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
