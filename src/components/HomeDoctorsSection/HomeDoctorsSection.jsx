import React, { useRef, useState, useEffect } from "react";
import DoctorsCards from "../DoctorsCards/DoctorsCards";
import "./HomeDoctorsSection.css";
import doctors from "../../data/Doctor";

function HomeDoctorsSection() {
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [animated, setAnimated] = useState(false); // track heading/subtitle animation

  // Scroll arrows logic
  useEffect(() => {
    const checkOverflow = () => {
      const el = carouselRef.current;
      if (!el) return;

      setShowRight(el.scrollWidth > el.clientWidth);
      setShowLeft(el.scrollLeft > 0);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  // Intersection Observer for heading & subtitle animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            sectionRef.current
              .querySelector(".home-doctors-title")
              .classList.add("slide-in-left");
            sectionRef.current
              .querySelector(".home-doctors-subtitle")
              .classList.add("slide-in-left");

            setAnimated(true); // only animate once
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animated]);

  return (
    <div className="home-doctors-wrapper" ref={sectionRef}>
      <h2 className="home-doctors-title">Meet Our Doctors</h2>
      <p className="home-doctors-subtitle">
        Experienced and caring medical professionals dedicated to your health
      </p>

      {showLeft && (
        <button className="home-arrow left" onClick={scrollLeft}>
          &#8249;
        </button>
      )}
      {showRight && (
        <button className="home-arrow right" onClick={scrollRight}>
          &#8250;
        </button>
      )}

      <div
        className="home-doctors-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {doctors.map((doctor) => (
          <DoctorsCards
            key={doctor.id}
            image={doctor.image}
            name={doctor.name}
            department={doctor.department}
            qualification={doctor.qualification}
            phone={doctor.phone}
            availability={doctor.availability}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeDoctorsSection;
