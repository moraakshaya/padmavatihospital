import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Rohit Sharma",
        role: "Patient",
        photo: "/images/patient1.jpg",
        rating: 5,
        feedback:
            "The doctors were extremely caring and supportive. The treatment was smooth and stress-free."
    },
    {
        name: "Priya Reddy",
        role: "Patient",
        photo: "/images/patient2.jpg",
        rating: 4,
        feedback:
            "Very clean environment and friendly staff. I felt comfortable throughout my stay."
    },
    {
        name: "Amit Gupta",
        role: "Patient",
        photo: "/images/patient3.jpg",
        rating: 5,
        feedback:
            "Excellent service! The doctor explained everything clearly. Highly recommended."
    }
];

function Testimonials() {
    const heroRef = useRef(null);
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimateHero(true);
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => observer.disconnect();
    }, []);

    //TESTIMONIALS SECTION ANIMATION

    const sectionRef = useRef(null);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true); // animate only once
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="testimonial-hero" ref={heroRef}>
                <h1 className={`hero-title ${animateHero ? "slide-left" : ""}`}>
                    Patient Testimonials
                </h1>

                <p className={`hero-subtitle ${animateHero ? "slide-left delay" : ""}`}>
                    Hear inspiring stories from our patients and their experience at our hospital.
                </p>
            </section>

            {/* ---------- TESTIMONIAL LIST ---------- */}
           <section className="testimonials" ref={sectionRef}>
      {/* TITLE */}
      <h2 className={`title ${animate ? "slide-left" : ""}`}>
        What Our Patients Say
      </h2>

      {/* TESTIMONIAL CARDS */}
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div
            className={`testimonial-card ${animate ? "slide-bottom" : ""}`}
            key={index}
            style={{ transitionDelay: `${index * 0.15}s` }} // stagger cards
          >
            {/* <img src={item.photo} alt={item.name} className="patient-img" /> */}
            <p className="feedback">"{item.feedback}"</p>

            <div className="patient-info">
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>

            <div className="stars">{"⭐".repeat(item.rating)}</div>
          </div>
        ))}
      </div>

      {/* GOOGLE REVIEW BOX */}
      <div className="google-review-box">
        <p className={`google-text ${animate ? "slide-left" : ""}`}>
          Want to read more patient experiences?
        </p>

        <a
          href="https://share.google/vrspeyG6Xo0jwhFLi"
          target="_blank"
          rel="noopener noreferrer"
          className={`google-review-btn ${animate ? "slide-bottom" : ""}`}
        >
          ⭐ Read More Reviews on Google
        </a>
      </div>
    </section>
        </>
    );
}

export default Testimonials;
