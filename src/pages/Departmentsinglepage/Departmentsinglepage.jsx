import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import departmentsData from "../../data/departmentsinglepagedata";
import "./Departmentsinglepage.css";

// ------------------ REUSABLE HOOK ------------------
const useSectionAnimation = () => {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimate(true);
                    observer.disconnect(); // animate ONCE
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, animate];
};

function Departmentsinglepage() {
    const { slug } = useParams();
    const dept = departmentsData.find((item) => item.slug === slug);

    if (!dept) return <h2 className="not-found">Department Not Found</h2>;

    // ------------------ HERO ------------------
    const heroRef = useRef(null);
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateHero(true);
                }
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    // ------------------ ABOUT ------------------
    const aboutRef = useRef(null);
    const [animateAbout, setAnimateAbout] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateAbout(true);
                }
            },
            { threshold: 0.3 }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    // ------------------ OTHER SECTIONS (USE HOOK) ------------------
    const [highlightsRef, animateHighlights] = useSectionAnimation();
    const [servicesRef, animateServices] = useSectionAnimation();
    const [doctorsRef, animateDoctors] = useSectionAnimation();
    const [conditionsRef, animateConditions] = useSectionAnimation();

    return (
        <div className="department-page">

            {/* -------------------- HERO -------------------- */}
            <section className="department-hero" ref={heroRef}>
                <div className="dep-hero-overlay">
                    <h1 className={`dep-hero-title ${animateHero ? "slide-left" : ""}`}>
                        {dept.name}
                    </h1>
                    <p className={`dep-hero-subtitle ${animateHero ? "slide-left" : ""}`}>
                        {dept.overview}
                    </p>
                </div>
            </section>

            {/* -------------------- ABOUT -------------------- */}
            <section className="department-about" ref={aboutRef}>
                <div className={`about-image ${animateAbout ? "slide-up" : ""}`}>
                    <img src={dept.image} alt={dept.name} />
                </div>

                <div className={`about-content ${animateAbout ? "slide-right" : ""}`}>
                    <h2>About {dept.name}</h2>
                    <p>{dept.about}</p>
                </div>
            </section>

            {/* -------------------- HIGHLIGHTS -------------------- */}
            <section className="department-highlights" ref={highlightsRef}>
                <h2 className={`section-heading ${animateHighlights ? "slide-left" : ""}`}>
                    Why Choose Our {dept.name} Department
                </h2>

                <div className="highlights-grid">
                    {dept.highlights?.map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                            <div
                                key={index}
                                className={`highlight-card ${animateHighlights ? `card-animate card-${index}` : ""}`}
                            >
                                <IconComponent className="highlight-icon" size={40} />
                                <h3>{highlight.title}</h3>
                                <p>{highlight.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* -------------------- SERVICES -------------------- */}
            <section className="department-services" ref={servicesRef}>
                <h2 className={`section-heading ${animateServices ? "slide-left" : ""}`}>
                    Services We Provide
                </h2>

                <div className="services-grid">
                    {dept.services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card ${animateServices ? `card-animate card-${index}` : ""}`}
                        >
                            <p>{service}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* -------------------- DOCTORS -------------------- */}
            <section className="department-doctors-highlight" ref={doctorsRef}>
                <h2 className={`section-heading ${animateDoctors ? "slide-left" : ""}`}>
                    Meet Our Experts
                </h2>

                <div className="doctors-highlight-grid">
                    {dept.doctors?.map((doctor, index) => (
                        <div
                            key={index}
                            className={`doctor-highlight-card ${animateDoctors ? `card-animate card-${index}` : ""}`}
                        >
                            <div className="doctor-img">
                                <img src={doctor.img} alt={doctor.name} />
                            </div>
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <p className="doctor-designation">{doctor.designation}</p>
                                <p className="doctor-qualifications">{doctor.qualifications}</p>
                                <p className="doctor-experience">{doctor.experience}</p>
                                <p className="doctor-about">{doctor.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* -------------------- CONDITIONS -------------------- */}
            <section className="department-conditions" ref={conditionsRef}>
                <h2 className={`section-heading ${animateConditions ? "slide-left" : ""}`}>
                    Common Conditions
                </h2>

                <div className="conditions-grid">
                    {dept.conditions.map((condition, index) => (
                        <div
                            key={index}
                            className={`condition-card ${animateConditions ? `card-animate card-${index}` : ""}`}
                        >
                            <p>{condition}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Departmentsinglepage;
