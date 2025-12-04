import React from "react";
import "./Home.css";
import { FaHeartbeat, FaUserMd, FaHospitalAlt, FaHandsHelping, FaRegHeart } from "react-icons/fa";
import DepartmentCards from "../../components/DepartmentCards/DepartmentCards";
import HomeDoctorsSection from "../../components/HomeDoctorsSection/HomeDoctorsSection";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // HERO SECTION ANIMATION
  const heroRef = useRef(null);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateHero(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
  }, []);


  // WHY SECTION ANIMATION
  const whyRef = useRef(null);
  const [animateWhy, setAnimateWhy] = useState(false);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateWhy(true);
          observer2.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    if (whyRef.current) observer2.observe(whyRef.current);
  }, []);


  // CARDIOLOGY SECTION ANIMATION
  const cardioRef = useRef(null);
  const [animateCardio, setAnimateCardio] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCardio(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardioRef.current) observer.observe(cardioRef.current);
  }, []);


  // TESTINOMIALS SECTION ANIMATION
  const sectionRef = useRef(null);
  const [animatedTesti, setAnimatedTesti] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedTesti) {
            const section = entry.target;

            // Animate heading and subtitle
            section.querySelector(".testimonials-title").classList.add("slide-in-left");
            section.querySelector(".testimonials-subtitle").classList.add("slide-in-left");

            // Animate testimonial cards with stagger
            const cards = section.querySelectorAll(".testimonial-card");
            cards.forEach((card, index) => {
              card.style.animationDelay = `${0.6 + index * 0.2}s`;
              card.classList.add("slide-up-fade");
            });

            setAnimatedTesti(true); // mark as animated
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animatedTesti]);


  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-overlay">
          <div className={`hero-content ${animateHero ? "slide-in" : ""}`}>
            <h1>
              Your Health, Our <span>Priority</span>
            </h1>
            <p>
              Providing exceptional healthcare services with compassion,
              expertise, and state-of-the-art facilities.
            </p>
            <div className={`hero-buttons ${animateHero ? "slide-in-buttons" : ""}`}>
              <button
                className="btn-primary"
                onClick={() => navigate("/Bookappoinment")}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section" ref={whyRef}>
        <h2 className={`why-title ${animateWhy ? "title-animate" : ""}`}>
          Why Choose Padmavati Medical Center?
        </h2>

        <div className="why-cards">

          <div className={`why-card ${animateWhy ? "card-animate delay-1" : ""}`}>
            <div className="why-icon icon-blue"><FaHeartbeat /></div>
            <h3>24/7 Emergency Care</h3>
            <p>Immediate and round-the-clock emergency care with rapid response.</p>
          </div>

          <div className={`why-card ${animateWhy ? "card-animate delay-2" : ""}`}>
            <div className="why-icon icon-gold"><FaUserMd /></div>
            <h3>Experienced Specialists</h3>
            <p>Highly skilled and qualified doctors across all major departments.</p>
          </div>

          <div className={`why-card ${animateWhy ? "card-animate delay-3" : ""}`}>
            <div className="why-icon icon-blue"><FaHospitalAlt /></div>
            <h3>Modern Infrastructure</h3>
            <p>Advanced facilities equipped with the latest medical technology.</p>
          </div>

          <div className={`why-card ${animateWhy ? "card-animate delay-4" : ""}`}>
            <div className="why-icon icon-pink"><FaHandsHelping /></div>
            <h3>Patient-First Approach</h3>
            <p>Compassionate care tailored to every patient’s unique needs.</p>
          </div>

        </div>
      </section>

      {/* CARDIOLOGY SECTION */}
      <section className="home-cardiology-section" ref={cardioRef}>
        <div className="home-cardiology-container">

          <div className={`home-cardiology-image ${animateCardio ? "slow-slide-up" : ""}`}>
            <img src="/cardiology.webp" alt="Cardiology" />
          </div>

          <div className="home-cardiology-content">
            <span className={`tag ${animateCardio ? "slide-left" : ""}`}>⭐Featured Department</span>

            <h2 className={animateCardio ? "slide-left delay-1" : ""}>
              Excellence in <span>Cardiology</span> Care
            </h2>

            <p className={`description ${animateCardio ? "slide-left delay-2" : ""}`}>
              Comprehensive heart care with advanced diagnostic and treatment facilities.
            </p>

            <ul className="home-cardiology-list">
              <li className={animateCardio ? "slide-left delay-3" : ""}>
                <span className="icon-circle"><FaRegHeart /></span> Angiogram & Angioplasty
              </li>

              <li className={animateCardio ? "slide-left delay-4" : ""}>
                <span className="icon-circle"><FaRegHeart /></span> ECG & Echo Tests
              </li>

              <li className={animateCardio ? "slide-left delay-5" : ""}>
                <span className="icon-circle"><FaRegHeart /></span> Cardiac ICU & Emergency Care
              </li>

              <li className={animateCardio ? "slide-left delay-6" : ""}>
                <span className="icon-circle"><FaRegHeart /></span> Expert Cardiologists
              </li>
            </ul>

            <button
              className={`learn-btn ${animateCardio ? "slide-left delay-7" : ""}`}
              onClick={() => navigate("/departments/cardiology")}
            >
              Explore Cardiology →
            </button>
          </div>

        </div>
      </section>

      {/* DEPARTMENTS SECTION */}
      <DepartmentCards />

      {/* DOCTORS SECTION*/}
      <HomeDoctorsSection />

      {/* TESTINOMIALS sECTION */}
      <section className="testimonials-section" ref={sectionRef}>
        <h2 className="testimonials-title">Patient Testimonials</h2>
        <p className="testimonials-subtitle">
          Hear what our patients have to say about their experience
        </p>
        <a
          href="https://www.google.com/maps/place/YourHospitalURLHere"
          target="_blank"
          className="reviews-btn"
        >
          ⭐ Read More Google Reviews
        </a>

        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "The cardiology team saved my life. Dr. Kondal Rao and his staff are exceptional.
              The care and attention I received was beyond my expectations."
            </p>
            <h4 className="testimonial-name">Rajesh Kumar</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Excellent facilities and caring doctors. My father's surgery was successful
              thanks to Dr. Prashanth Kumar's expertise. Highly recommended!"
            </p>
            <h4 className="testimonial-name">Priya Sharma</h4>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              "Professional staff, clean environment, and state-of-the-art equipment.
              The physiotherapy department helped me recover quickly from my injury."
            </p>
            <h4 className="testimonial-name">Amit Patel</h4>
          </div>
        </div>
      </section>

    </>
  );
}

export default Home;