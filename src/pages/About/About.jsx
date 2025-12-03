import React, { useEffect, useState, useRef } from "react";
import { FaHeart, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import "./About.css";


function About() {

  //HERO SECTION ANIMATION 

  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger animation once when page loads
    setTimeout(() => {
      setAnimateHero(true);
    }, 100);
  }, []);

  //ABOUT SECTION ANIMATION 

  const historySectionRef = useRef(null); // renamed
  const [historyVisible, setHistoryVisible] = useState(false); // renamed

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHistoryVisible(true); // animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% of section is visible
    );

    if (historySectionRef.current) {
      observer.observe(historySectionRef.current);
    }

    return () => {
      if (historySectionRef.current) observer.unobserve(historySectionRef.current);
    };
  }, []);


  //MV SECTION ANIMATION

  const mvSectionRef = useRef(null); // ref for the section
  const [cardsVisible, setCardsVisible] = useState(false); // animate only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (mvSectionRef.current) {
      observer.observe(mvSectionRef.current);
    }

    return () => {
      if (mvSectionRef.current) observer.unobserve(mvSectionRef.current);
    };
  }, []);



  //VALUES SECTION ANIMATION

  const valuesRef = useRef(null); // ref for the section
  const [visible, setVisible] = useState(false); // animate only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => {
      if (valuesRef.current) observer.unobserve(valuesRef.current);
    };
  }, []);


  //STATS SECTION ANIMATION


  const statsSectionRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false); // animate once

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsSectionRef.current) observer.observe(statsSectionRef.current);

    return () => {
      if (statsSectionRef.current) observer.unobserve(statsSectionRef.current);
    };
  }, []);


  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className={`container ${animateHero ? "animate" : ""}`}>
          <h1 className="about-hero-title">About Our Hospital</h1>
          <p className="about-hero-subtitle">
            Delivering compassionate care with modern medical excellence.
          </p>
        </div>
      </section>

      {/* HOSPITAL HISTORY */}
      <section className="about-section about-history" ref={historySectionRef}>
        <div className="history-container">

          {/* LEFT IMAGE */}
          <div className={`history-image ${historyVisible ? "slide-in-bottom" : ""}`}>
            <img
              src="/landingimg.webp"
              alt="PMC Hospital"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={`history-content ${historyVisible ? "slide-in-right" : ""}`}>
            <h2 className="section-title">Our History</h2>
            <p className="section-text">
              Established in 1998, PMC Hospital has been committed to providing
              top-tier healthcare services to the community. With a team of
              dedicated doctors and state-of-the-art infrastructure, our hospital
              continues to evolve with the latest advancements in medical
              technology. Over the past two decades, we have expanded our
              departments, introduced specialty units, and strengthened our
              patient-centered approach.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mv-section" ref={mvSectionRef}>
        <div className="container mv-container">
          <div className={`mv-card mv-mission ${cardsVisible ? "slide-in-bottom" : ""}`}>
            <div className="mv-icon">
              <FaHeart />
            </div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, high-quality healthcare services that improve
              the health and well-being of our community. We are committed to
              delivering patient-centered care with compassion, respect, and
              clinical excellence.
            </p>
          </div>

          <div className={`mv-card mv-vision ${cardsVisible ? "slide-in-bottom delay" : ""}`}>
            <div className="mv-icon">
              <FaAward />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be the leading healthcare provider in the region, recognized for
              medical excellence, innovation, and compassionate care. We envision a
              healthier community where everyone has access to world-class medical
              services.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section" ref={valuesRef}>
        <div className="container">
          <h2 className={`values-section-title ${visible ? "slide-in-left" : ""}`}>
            Our Core Values
          </h2>
          <p className={`values-section-subtitle ${visible ? "slide-in-left delay" : ""}`}>
            The principles that guide everything we do
          </p>

          <div className="values-grid">
            <div className={`value-card ${visible ? "slide-in-bottom" : ""}`}>
              <div className="icon"><FaHeart /></div>
              <h4>Compassion</h4>
              <p>We treat every patient with empathy, kindness, and respect</p>
            </div>
            <div className={`value-card ${visible ? "slide-in-bottom delay-1" : ""}`}>
              <div className="icon"><FaAward /></div>
              <h4>Excellence</h4>
              <p>We strive for the highest standards in medical care</p>
            </div>
            <div className={`value-card ${visible ? "slide-in-bottom delay-2" : ""}`}>
              <div className="icon"><FaShieldAlt /></div>
              <h4>Integrity</h4>
              <p>We uphold the highest ethical standards in all we do</p>
            </div>
            <div className={`value-card ${visible ? "slide-in-bottom delay-3" : ""}`}>
              <div className="icon"><FaUsers /></div>
              <h4>Collaboration</h4>
              <p>We work together as a team for better outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITAL STATS */}
      <section className="stats-section" ref={statsSectionRef}>
        <div className="container">
          <h2 className={`stats-title ${statsVisible ? "slide-in-left" : ""}`}>
            Our Achievements
          </h2>

          <p className={`stats-subtitle ${statsVisible ? "slide-in-left delay" : ""}`}>
            Milestones that define our excellence
          </p>

          <div className="stats-grid">
            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay" : ""}`}>
              <h3>30+</h3>
              <p>Years of Service</p>
            </div>

            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay-2" : ""}`}>
              <h3>50K+</h3>
              <p>Patients Treated</p>
            </div>

            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay-3" : ""}`}>
              <h3>17+</h3>
              <p>Expert Doctors</p>
            </div>

            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay-4" : ""}`}>
              <h3>14</h3>
              <p>Departments</p>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}


export default About;
