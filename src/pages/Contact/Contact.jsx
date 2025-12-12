import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {

  // WEB3FORMS LOGIC
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      e.target.reset();
    } else {
      setResult("Something went wrong!");
    }
  };



  // CONTACT HERO ANIMATION
  const contactHeroRef = useRef(null);
  const [contactHeroVisible, setContactHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContactHeroVisible(true);
            observer.unobserve(entry.target); // animate ONCE
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactHeroRef.current) observer.observe(contactHeroRef.current);

    return () => {
      if (contactHeroRef.current) observer.unobserve(contactHeroRef.current);
    };
  }, []);

  // CONTACT INFO SECTION ANIMATION
  const ciSectionRef = useRef(null);
  const [ciVisible, setCiVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCiVisible(true);
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ciSectionRef.current) observer.observe(ciSectionRef.current);

    return () => {
      if (ciSectionRef.current) observer.unobserve(ciSectionRef.current);
    };
  }, []);



  // CONTACT SEND MESSAGE SECTION ANIMATION


  const contactLeftRef = useRef(null);
  const contactRightRef = useRef(null);

  const [contactAnimateLeft, setContactAnimateLeft] = useState(false);
  const [contactAnimateRight, setContactAnimateRight] = useState(false);

  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            if (entry.target === contactLeftRef.current) {
              setContactAnimateLeft(true);
            }

            if (entry.target === contactRightRef.current) {
              setContactAnimateRight(true);
            }

            contactObserver.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactLeftRef.current) contactObserver.observe(contactLeftRef.current);
    if (contactRightRef.current) contactObserver.observe(contactRightRef.current);

    return () => contactObserver.disconnect();
  }, []);




  return (
    <div className="contact-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="contact-hero" ref={contactHeroRef}>
        <div className="container">
          <h1 className={contactHeroVisible ? "slide-in-left" : ""}>
            Contact Us
          </h1>

          <p className={contactHeroVisible ? "slide-in-left delay" : ""}>
            We’re here to assist you with any medical support you need.
          </p>
        </div>
      </section>


      {/* ---------------- CONTACT INFO BOXES SECTION ---------------- */}
      <section className="ci-section" ref={ciSectionRef}>
        <div className="ci-container">

          {/* Emergency */}
          <div className={`ci-card ${ciVisible ? "slide-up" : ""}`}>
            <div className="ci-icon"><FaPhoneAlt /></div>
            <h3>Emergency</h3>
            <p className="ci-main">040-27007111</p>
            <p className="ci-sub">24/7 Available</p>
          </div>

          {/* Appointments */}
          <div className={`ci-card ${ciVisible ? "slide-up delay-1" : ""}`}>
            <div className="ci-icon"><FaPhoneAlt /></div>
            <h3>Appointments</h3>
            <p className="ci-main">9160668686 , 9866635947</p>
            <p className="ci-sub">Mon–Sat, 9AM–6PM</p>
          </div>

          {/* Email */}
          <div className={`ci-card ${ciVisible ? "slide-up delay-2" : ""}`}>
            <div className="ci-icon"><FaEnvelope /></div>
            <h3>Email</h3>
            <p className="ci-main">padmavatimedicalcenter2010@gmail.com</p>
            <p className="ci-sub">We reply in 24hrs</p>
          </div>

          {/* Hours */}
          <div className={`ci-card ${ciVisible ? "slide-up delay-3" : ""}`}>
            <div className="ci-icon"><FaClock /></div>
            <h3>Hours</h3>
            <p className="ci-main">24/7 Emergency</p>
            <p className="ci-sub">OPD: 9AM–6PM</p>
          </div>

        </div>
      </section>

      {/* ---------------- SEND MESSAGE + VISIT US SECTION ---------------- */}

      <section className="contact-main">
        <div className="contact-main-container">

          {/* -------- LEFT SIDE : FORM -------- */}
          <div
            ref={contactLeftRef}
            className={`contact-form slide-left ${contactAnimateLeft ? "active" : ""}`}
          >
            <h2>Send Us a Message</h2>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="1d0ce4c1-4a40-4c7f-b051-04816f638ced" />

              <label>Full Name *</label>
              <input name="name" type="text" placeholder="John Doe" required />

              <label>Email Address *</label>
              <input name="email" type="email" placeholder="john@example.com" required />

              <label>Phone Number *</label>
              <input name="phone" type="text" placeholder="+91 123 456 7890" required />

              <label>Subject *</label>
              <input name="subject" type="text" placeholder="How can we help?" required />

              <label>Message *</label>
              <textarea name="message" placeholder="Tell us more about your inquiry..." required></textarea>

              <button type="submit" className="send-btn">Send Message</button>
            </form>

          </div>

          {/* -------- RIGHT SIDE : ADDRESS + MAP -------- */}
          <div
            ref={contactRightRef}
            className={`contact-right slide-right ${contactAnimateRight ? "active" : ""}`}
          >
            <div className="visit-card">
              <h2>Visit Us</h2>
              <div className="visit-box">
                <h4>🏥 Hospital Address</h4>
                <p>
                  Plot No. 12-13-60, Main Road, Tarnaka<br />
                  Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel,<br />
                  Street No. 5, Tarnaka, Secunderabad – 500017
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="map-box">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.536213695486!2d78.4800331749272!3d17.385044683490277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97551e4e2f47%3A0x6b0a90fa14a3cd59!2sSultan%20Bazaar!5e0!3m2!1sen!2sin!4v1705130463434"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>




    </div>
  );
}

export default Contact;
