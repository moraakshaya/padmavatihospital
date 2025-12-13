import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import departmentsData from "../../data/departmentsinglepagedata";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileWrapperRef = useRef(null);

  /* ---------------- CLOSE MOBILE MENU ON OUTSIDE CLICK ---------------- */
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

  /* ---------------- PREVENT DESKTOP DROPDOWN OVERFLOW ---------------- */
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();

      if (rect.right > window.innerWidth) {
        dropdownRef.current.style.left = "auto";
        dropdownRef.current.style.right = "0";
      } else {
        dropdownRef.current.style.left = "0";
        dropdownRef.current.style.right = "auto";
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

        {/* ---------------- DESKTOP MENU ---------------- */}
        <ul className="pmc-nav-links desktop-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>

          {/* DESKTOP DEPARTMENTS DROPDOWN */}
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
              className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
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

          {/* DESKTOP MORE DROPDOWN */}
          <li
            className="pmc-dropdown"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <span className={`dropbtn ${moreDropdownOpen ? "active" : ""}`}>
              More ▾
            </span>

            <div className={`dropdown-menu ${moreDropdownOpen ? "show" : ""}`}>
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

        {/* ---------------- MOBILE MENU + ICON WRAPPER ---------------- */}
        <div ref={mobileWrapperRef}>

          {/* MOBILE ICON */}
          <div
            className="pmc-menu-icon"
            onClick={() => setMenuOpen(prev => !prev)}
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
            <li className="mobile-dropdown">
              <span
                className={`mobile-dropbtn ${dropdownOpen ? "active" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Departments ▾
              </span>

              <ul className={dropdownOpen ? "mobile-submenu show" : "mobile-submenu"}>
                {departmentsData.map((dept) => (
                  <li key={dept.id}>
                    <Link
                      to={`/departments/${dept.slug}`}
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                    >
                      {dept.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

            {/* MOBILE MORE */}
            <li className="mobile-dropdown">
              <span
                className={`mobile-dropbtn ${moreDropdownOpen ? "active" : ""}`}
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              >
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
