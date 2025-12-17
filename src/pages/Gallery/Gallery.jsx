import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const galleryData = [
  //Hospital Campaigns (events)
  { id: 1, category: "events", img: "/gallery/gallery10.webp" },
  { id: 2, category: "events", img: "/gallery/events2.webp" },
  { id: 3, category: "events", img: "/gallery/events3.webp" },
  { id: 4, category: "events", img: "/gallery/events4.webp" },
  { id: 5, category: "events", img: "/gallery/events5.webp" },
  { id: 6, category: "events", img: "/gallery/events6.webp" },



  // Infrastructure
  { id: 7, category: "infrastructure", img: "/gallery/gallery1.webp" },
  { id: 8, category: "infrastructure", img: "/gallery/gallery2.webp" },
  { id: 9, category: "infrastructure", img: "/gallery/gallery3.webp" },
  { id: 10, category: "infrastructure", img: "/gallery/gallery4.webp" },
  { id: 11, category: "infrastructure", img: "/gallery/gallery5.webp" },
  { id: 12, category: "infrastructure", img: "/gallery/gallery6.webp" },
  { id: 13, category: "infrastructure", img: "/gallery/gallery7.webp" },
  { id: 14, category: "infrastructure", img: "/gallery/gallery8.webp" },
  { id: 15, category: "infrastructure", img: "/gallery/gallery9.webp" },
  { id: 16, category: "infrastructure", img: "/gallery/infa1.webp"},
  { id: 17, category: "infrastructure", img: "/gallery/infa2.webp" },
  { id: 18, category: "infrastructure", img: "/gallery/infa3.webp" },
  { id: 19, category: "infrastructure", img: "/gallery/infa4.webp" },
  { id: 20, category: "infrastructure", img: "/gallery/infa5.webp" },
  { id: 21, category: "infrastructure", img: "/gallery/infa6.webp" },
  { id: 22, category: "infrastructure", img: "/gallery/infa7.webp" },
  { id: 23, category: "infrastructure", img: "/gallery/infa8.webp" },
  { id: 24, category: "infrastructure", img: "/gallery/infa9.webp" },
  { id: 25, category: "infrastructure", img: "/gallery/infa10.webp" },
  { id: 26, category: "infrastructure", img: "/gallery/infa11.webp" },
  { id: 27, category: "infrastructure", img: "/gallery/infa12.webp" },
  { id: 28, category: "infrastructure", img: "/gallery/infa13.webp" },
  { id: 29, category: "infrastructure", img: "/gallery/infa14.webp" },
  { id: 30, category: "infrastructure", img: "/gallery/infa15.webp" },
  { id: 31, category: "infrastructure", img: "/gallery/infa16.webp" },

];

function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [selectedImage, setSelectedImage] = useState(null);


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
  {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }
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
            <li className={selectedFilter === "events" ? "active" : ""} onClick={() => setSelectedFilter("events")}>Health Campaigns</li>
            <li className={selectedFilter === "infrastructure" ? "active" : ""} onClick={() => setSelectedFilter("infrastructure")}>Infrastructure</li>

          </ul>
        </div>

        <div ref={rightRef} className={`gallery-right ${animateRight ? "slide-in-bottom" : ""}`}>
          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <div
                className="gallery-card"
                key={img.id}
                onClick={() => setSelectedImage(img.img)}
              >
                <img src={img.img} alt="" />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* IMAGE POPUP MODAL */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="full" />
            <button className="gall-close-btn" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </>
  );
}




export default Gallery;
