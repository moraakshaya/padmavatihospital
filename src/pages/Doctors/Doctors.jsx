import React, { useState, useRef, useEffect } from "react";
import "./Doctors.css";
import doctors from "../../data/Doctor";
import DoctorsCards from "../../components/DoctorsCards/DoctorsCards"; // ✅ IMPORTANT

function Doctors() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null); // Ref for dropdown container

  const filteredDoctors = doctors.filter((doc) => {
    const matchDept = selectedDept === "All" || doc.department === selectedDept;
    const matchName = doc.name.toLowerCase().includes(searchQuery);
    const matchDeptSearch = doc.department.toLowerCase().includes(searchQuery);
    return matchDept && (matchName || matchDeptSearch);
  });

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  {/* HERO SECTION ANIMATION */ }
  const heroRef = useRef(null);
  useEffect(() => {
    const section = heroRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("show");   // Trigger animation
          observer.disconnect();           // Stop watching → animation runs once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(section);
  }, []);

  {/* CARDIOLOGY SECTION ANIMATION */ }
  const cardioRef = useRef(null);

  useEffect(() => {
    const section = cardioRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("cardio-show"); // Trigger animation
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }, []);

  
  return (
    <>
      {/* DOCTORS HERO SECTION */}
      <section className="doctors-hero" ref={heroRef}>
        <video className="background-video" autoPlay loop muted>
          <source src="/doctors/herovideo.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="content">
          <h1>Our Medical Team</h1>
          <p>
            Meet our team of highly qualified and experienced medical professionals
          </p>
        </div>
      </section>

      {/* DOCTORS CARDIOLOGY SECTION */}
      <section className="cardio-section" ref={cardioRef}>
        <div className="cardio-container">
          <span className="cardio-featured-tag">⭐ FEATURED SPECIALISTS</span>

          <h2 className="cardio-title">
            Our <span className="cardio-highlight">Cardiology</span> Experts
          </h2>

          <p className="cardio-subtitle">
            Renowned cardiologists with extensive experience in treating heart conditions
          </p>

          <div className="cardio-cards-wrapper">
            {doctors
              .filter((doc) => doc.department === "Cardiologist")
              .map((doctor, index) => (
                <DoctorsCards
                  key={index}
                  image={doctor.img}
                  name={doctor.name}
                  department={doctor.department}
                  qualification={doctor.qualification}
                  regNo={doctor.regNo}
                  phone={doctor.phone}
                  availability={doctor.availability}
                />
              ))}
          </div>
        </div>
      </section>

      {/* DOCTORS MEMBERS SECTION */}
      <section className="dm-section">
        <div className="dm-container">
          <h2 className="dm-title">All Doctors</h2>
          <p className="dm-subtitle">Expert physicians across all medical specialties</p>

          {/* SEARCH + DROPDOWN FILTER */}
          <div className="dm-filter-bar">
            <div className="dm-search-dropdown-wrapper" ref={dropdownRef}>
              <div className="dm-search-box">
                <span className="dm-search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search doctor or department..."
                  value={searchQuery}
                  onChange={(e) => {
                    const value = e.target.value.toLowerCase();
                    setSearchQuery(value);
                    setShowDropdown(value.length > 0);
                  }}
                />
                <button
                  className="dm-dropdown-toggle"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  ▼
                </button>
              </div>

              {showDropdown && (
                <div className="dm-dropdown-menu">
                  <div
                    className="dm-dropdown-item"
                    onClick={() => {
                      setSelectedDept("All");
                      setShowDropdown(false);
                    }}
                  >
                    All Departments
                  </div>

                  {[...new Set(doctors.map((doc) => doc.department))]
                    .filter((dept) => dept.toLowerCase().includes(searchQuery))
                    .map((dept, i) => (
                      <div
                        className="dm-dropdown-item"
                        key={i}
                        onClick={() => {
                          setSelectedDept(dept);
                          setShowDropdown(false);
                        }}
                      >
                        {dept}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          {/* Doctors Cards */}
          <div className="dm-cards-wrapper">
            {filteredDoctors.map((doctor, index) => (
              <DoctorsCards
                key={index}
                image={doctor.img}
                name={doctor.name}
                department={doctor.department}
                qualification={doctor.qualification}
                regNo={doctor.regNo}
                phone={doctor.phone}
                availability={doctor.availability}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default Doctors;
