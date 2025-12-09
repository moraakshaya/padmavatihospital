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


  // Add refs for about details
  const aboutRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);


  // LEADERSHIP SECTION ANIMATION
  const leadershipRef = useRef(null);
  const [leadershipVisible, setLeadershipVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLeadershipVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leadershipRef.current) observer.observe(leadershipRef.current);

    return () => {
      if (leadershipRef.current) observer.unobserve(leadershipRef.current);
    };
  }, []);


  //QUALITY HEALTHCARE SECTION
  const qualityRef = useRef(null);
  const [qualityVisible, setQualityVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setQualityVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (qualityRef.current) observer.observe(qualityRef.current);

    return () => {
      if (qualityRef.current) observer.unobserve(qualityRef.current);
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

      {/* ABOUT DETAILS SECTION */}
      <section className="about-details-section" ref={aboutRef}>
        <div className="container about-details-container">
          {/* IMAGE LEFT */}
          <div className={`about-image ${aboutVisible ? "slide-in-left" : ""}`}>
            <img src="/hospital.jpeg" alt="Padmavati Medical Centre" />
          </div>

          {/* CONTENT RIGHT */}
          <div className={`about-content ${aboutVisible ? "slide-in-right" : ""}`}>
            <h2>About Padmavati Medical Centre</h2>
            <p>
              Padmavati Medical Centre is a trusted healthcare institution in Tarnaka, Hyderabad,
              committed to providing compassionate, ethical, and quality medical services to patients and families.
            </p>
            <p>
              Our hospital is built on the foundation of patient-first care, modern medical facilities,
              and a multidisciplinary team of experienced doctors.
            </p>
            <p>
              At the heart of our hospital’s excellence is our Medical Director,
              <strong> Dr. G. Kondal Rao</strong>, a highly reputed and senior Interventional Cardiologist with nearly 30 years of clinical experience.
            </p>
            <p>
              We specialize in advanced cardiac care, ethical medical practices, and patient-focused healthcare that you can trust.
            </p>

            {/* VISION & MISSION BOXES BELOW CONTENT */}
            <div className="vision-mission-container-right">
              <div className="vm-box">
                <h3>Our Vision</h3>
                <p>
                  To deliver <strong>patient-centric healthcare</strong> that is
                  <strong> accessible, ethical, and guided by advanced medical knowledge</strong>.
                </p>
              </div>

              <div className="vm-box">
                <h3>Our Mission</h3>
                <ul>
                  <li>Provide <strong>high-quality medical services</strong> across multiple specialties</li>
                  <li>Maintain a <strong>caring and healing environment</strong> for every patient</li>
                  <li>Ensure <strong>transparency, compassion, and personalized care</strong></li>
                  <li>Strengthen our hospital through <strong>continuous medical advancements</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="leadership-section" ref={leadershipRef}>
        <div className="container leadership-container">
          {/* LEFT CONTENT */}
          <div className={`leadership-content ${leadershipVisible ? "slide-in-left" : ""}`}>
            <h2>Leadership You Can Trust</h2>
            <p>
              At the heart of our hospital’s excellence is our <strong>Medical Director, Dr. G. Kondal Rao</strong>,
              a senior <strong>Interventional Cardiologist</strong> with nearly <strong>30 years of clinical experience</strong>.
              Under his leadership, <strong>Padmavati Medical Centre</strong> has become a dependable center for
              comprehensive healthcare, with a special focus on <strong>advanced cardiac care</strong>.
            </p>
            <h3>Dr. G. Kondal Rao’s Qualifications:</h3>
            <ul>
              <li><strong>MBBS</strong> – Kakatiya Medical College, 1988</li>
              <li><strong>MD (General Medicine)</strong> – Gandhi Medical College, 1992</li>
              <li><strong>DM (Cardiology)</strong> – Osmania Medical College, 1996</li>
              <li><strong>FSCAI</strong>, Fellow of the Society for Cardiovascular Angiography & Interventions</li>
              <li><strong>Registration:</strong> 12607 – Andhra Pradesh Medical Council (1998)</li>
            </ul>
            <p>
              Dr. Kondal Rao’s extensive experience in leading hospitals such as <strong>Apollo, Yashoda, Kamineni, Sunshine, and Virinchi </strong>
              ensures that <strong>Padmavati Medical Centre</strong> adheres to the highest standards of
              <strong>medical competence and patient safety</strong>. His expertise includes <strong>cardiac catheterization, angioplasty, heart valve procedures, arrhythmia management, TMT, Holter monitoring, and critical cardiac care</strong>.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className={`leadership-image ${leadershipVisible ? "slide-in-right" : ""}`}>
            <img src="/images/doctor.jpg" alt="Dr. G. Kondal Rao" />
          </div>
        </div>
      </section>

      {/* QUALITY HEALTHCARE SECTION */}
      <section
        className={`quality-healthcare-section ${qualityVisible ? "slide-in-left" : ""}`}
        ref={qualityRef}
      >
        <div className="container quality-healthcare-container">
          <h2>Quality Healthcare You Can Rely On</h2>
          <p>
            Padmavati Medical Centre offers a wide range of medical services supported by
            <strong> skilled specialists</strong> and <strong>modern facilities</strong>. While we cater
            to various health needs, we are particularly recognized for our strong
            <strong> cardiac services</strong> led by <strong>Dr. G. Kondal Rao</strong>.
          </p>

          <h3>Patients trust us for:</h3>
          <ul className="healthcare-points">
            <li>✔ <strong>Evidence-based treatments</strong></li>
            <li>✔ <strong>Experienced consultants</strong></li>
            <li>✔ <strong>Modern diagnostic facilities</strong></li>
            <li>✔ <strong>Personalized patient care</strong></li>
            <li>✔ <strong>Ethical medical practices</strong></li>
          </ul>

          <h3>Committed to Your Well-Being</h3>
          <p>
            Every patient at Padmavati Medical Centre is treated with <strong>respect, empathy, and dedication</strong>.
            Our team ensures accurate diagnosis, proper guidance, and effective treatment. With strong leadership,
            expert doctors, and a patient-focused approach, we continue to serve the community with
            <strong> excellence and care</strong>.
          </p>
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
              <h3>10K+</h3>
              <p>Patients Treated</p>
            </div>

            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay-3" : ""}`}>
              <h3>17+</h3>
              <p>Expert Doctors</p>
            </div>

            <div className={`stat-card ${statsVisible ? "stats-slide-bottom stats-delay-4" : ""}`}>
              <h3>15</h3>
              <p>Departments</p>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}


export default About;
