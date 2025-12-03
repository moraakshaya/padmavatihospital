import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const galleryData = [
  // Patient Interactions (Non-sensitive)
  // { id: 1, category: "patient", img: "/images/gallery/p1.jpg" },
  // { id: 2, category: "patient", img: "/images/gallery/p2.jpg" },

  // Infrastructure
  { id: 3, category: "infrastructure", img: "/public/gallery/gallery1.webp" },
  { id: 4, category: "infrastructure", img: "/public/gallery/gallery2.webp" },
  { id: 5, category: "infrastructure", img: "/public/gallery/gallery3.webp" },
  { id: 6, category: "infrastructure", img: "/public/gallery/gallery4.webp" },
  { id: 7, category: "infrastructure", img: "/public/gallery/gallery5.webp" },
  { id: 8, category: "infrastructure", img: "/public/gallery/gallery6.webp" },
  { id: 9, category: "infrastructure", img: "/public/gallery/gallery7.webp" },
  { id: 10, category: "infrastructure", img: "/public/gallery/gallery8.webp" },

  // Doctors at Work
  // { id: 5, category: "doctors", img: "/images/gallery/d1.jpg" },
  // { id: 6, category: "doctors", img: "/images/gallery/d2.jpg" },

  // Events 
  //  { id: 7, category: "events", img: "/images/gallery/e1.jpg" },
  // { id: 8, category: "events", img: "/images/gallery/e2.jpg" },
  // { id: 9, category: "events", img: "/images/gallery/e3.jpg" },
];

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredImages =
    selectedFilter === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedFilter);

  // HERO SECTION ANIMATION
  const heroRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // GALLERY SECTION ANIMATION
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) setAnimateLeft(true);
            if (entry.target === rightRef.current) setAnimateRight(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="gallery-hero" ref={heroRef}>
        <h1 className={`gallery-title ${visible ? "slide-in-left" : ""}`}>
          Hospital Gallery
        </h1>
        <p className={`gallery-subtitle ${visible ? "slide-in-left delay" : ""}`}>
          Explore our facilities, patient care moments, and dedicated doctors at work.
        </p>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-main container">
        <div ref={leftRef} className={`gallery-left ${animateLeft ? "slide-in-left" : ""}`}>
          <h3>Filter by Category</h3>
          <ul className="gallery-filters">
            <li className={selectedFilter === "all" ? "active" : ""} onClick={() => setSelectedFilter("all")}>All</li>
            <li className={selectedFilter === "events" ? "active" : ""} onClick={() => setSelectedFilter("events")}>Events</li>
            <li className={selectedFilter === "patient" ? "active" : ""} onClick={() => setSelectedFilter("patient")}>Patient Interactions</li>
            <li className={selectedFilter === "infrastructure" ? "active" : ""} onClick={() => setSelectedFilter("infrastructure")}>Infrastructure</li>
            <li className={selectedFilter === "doctors" ? "active" : ""} onClick={() => setSelectedFilter("doctors")}>Doctors at Work</li>
          </ul>
        </div>

        <div ref={rightRef} className={`gallery-right ${animateRight ? "slide-in-bottom" : ""}`}>
          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <div className="gallery-card" key={img.id}>
                <img src={img.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}




export default Gallery;
