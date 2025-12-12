import React, { useEffect, useRef, useState } from "react";
import "./Bookappoinment.css";
import { FaUserMd, FaClock, FaPhoneAlt, FaHeartbeat } from "react-icons/fa";

function Bookappoinment() {

    //HERO SECTION ANIMATION

    const heroRef = useRef(null);
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimateHero(true); // trigger animation
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.3 } // 30% of section visible
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    // WEB3FORMS LOGIC
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // replace with your key

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Appointment Booked Successfully!");
            e.target.reset();
        } else {
            setResult("Something went wrong!");
        }
    };


    // CONTENT AND FORM SECTION ANIMATION

    const sectionRef = useRef(null);
    const [textVisible, setTextVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTextVisible(true);  // left text
                        setCardsVisible(true); // left cards
                        setFormVisible(true);  // right form
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <>
            {/* ---------- HERO SECTION ---------- */}
            <section className="ba-hero" ref={heroRef}>
                <div className="ba-container">
                    <h1 className={`ba-title ${animateHero ? "slide-in-left" : ""}`}>
                        Book an Appointment
                    </h1>
                    <p className={`ba-subtitle ${animateHero ? "slide-in-left delay" : ""}`}>
                        Your health is our priority—schedule your visit with our expert doctors.
                    </p>
                </div>
            </section>

            {/* ---------- MAIN SECTION ---------- */}
            <section className="ba-main" ref={sectionRef}>
                <div className="ba-wrapper">

                    {/* ---------- LEFT INFO SECTION ---------- */}
                    <div className="ba-left">
                        <h2 className={`ba-title ${textVisible ? "slide-in-left" : ""}`}>
                            Why Choose Padmavati Medical Center?
                        </h2>
                        <p className={`ba-desc ${textVisible ? "slide-in-left delay" : ""}`}>
                            We provide advanced medical care with highly experienced specialists.
                        </p>

                        <div className="ba-points">
                            <div className={`point ${textVisible ? "slide-in-left delay-2" : ""}`}>
                                <FaHeartbeat className="icon" />
                                <p>Expert Cardiologist & Specialists</p>
                            </div>
                            <div className={`point ${textVisible ? "slide-in-left delay-3" : ""}`}>
                                <FaClock className="icon" />
                                <p>Quick & Easy Appointments</p>
                            </div>
                            <div className={`point ${textVisible ? "slide-in-left delay-4" : ""}`}>
                                <FaPhoneAlt className="icon" />
                                <p>24/7 Emergency Support</p>
                            </div>
                            <div className={`point ${textVisible ? "slide-in-left delay-5" : ""}`}>
                                <FaUserMd className="icon" />
                                <p>Personalized Patient Care</p>
                            </div>
                        </div>

                        <div className="ba-info-cards">
                            <div className={`info-card ${cardsVisible ? "slide-in-bottom delay" : ""}`}>
                                <div className="card-icon-round">🏅</div>
                                <h3>ISO Certified</h3>
                                <p>Maintaining international quality and safety standards.</p>
                            </div>
                            <div className={`info-card ${cardsVisible ? "slide-in-bottom delay-2" : ""}`}>
                                <div className="card-icon-round">🏥</div>
                                <h3>NABH Recommended</h3>
                                <p>Trusted hospital with verified medical excellence.</p>
                            </div>
                            <div className={`info-card ${cardsVisible ? "slide-in-bottom delay-3" : ""}`}>
                                <div className="card-icon-round">⭐</div>
                                <h3>10,000+ Patients Treated</h3>
                                <p>Serving the community with care and commitment.</p>
                            </div>
                        </div>
                    </div>

                    {/* ---------- RIGHT FORM SECTION ---------- */}
                    <div className={`ba-right ${formVisible ? "slide-in-right" : ""}`}>
                        <h2>Book an Appointment</h2>
                        <form className="ba-form" onSubmit={handleSubmit}>
                            <input type="text" name="Full Name" placeholder="Full Name" required />

                            <input type="tel" name="Phone Number" placeholder="Phone Number" required />

                            <input type="email" name="Email" placeholder="Email Address" required />

                            <select name="Department" required>
                                <option value="">Select Department</option>
                                <option>Cardiologist</option>
                                <option>Sr General Physician & Diabetologist</option>
                                <option>Gastroenterologist</option>
                                <option>Pediatrician</option>
                                <option>Neurophysician</option>
                                <option>Pulmonologist</option>
                                <option>Orthopedician</option>
                                <option>Nephrologist</option>
                                <option>General Surgeon</option>
                                <option>Anaesthetist</option>
                                <option>Pathologist</option>
                                <option>Urologist</option>
                                <option>Dermatologist</option>
                                <option>Physiotherapist</option>
                            </select>

                            <input type="date" name="Preferred Date" required />

                            <textarea
                                name="Symptoms"
                                placeholder="Describe symptoms (optional)"
                                rows="4"
                            ></textarea>

                            <button type="submit">Confirm Appointment</button>
                        </form>

                        <p className="form-status">{result}</p>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Bookappoinment;

