import React, { useRef, useEffect, useState } from "react";
import "./privacy-policy.css";
import privacypolicy from "../../assets/privacypolicy.png"; // change to your actual image

function PrivacyPolicy() {

    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="pp-hero">
                <div
                    className={`pp-hero-content ${animate ? "slide-in-left" : ""}`}
                    ref={textRef}
                >
                    <h1>Privacy Policy</h1>
                    <p>Your privacy and data security are important to us. Please read carefully.</p>
                </div>

                <div
                    className={`pp-hero-image ${animate ? "slide-in-bottom" : ""}`}
                    ref={imageRef}
                >
                    <img src={privacypolicy} alt="Privacy Policy" />
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="pp-content">
                <div className="pp-wrapper">

                    <h2>1. Introduction</h2>
                    <p>
                        We are committed to safeguarding your personal and medical information.
                        This Privacy Policy explains how we collect, use, store, and protect your data
                        when you interact with our hospital, whether through our website, appointment
                        booking system, or other services. By using our website or services, you agree
                        to the practices outlined in this policy.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p><strong>A. Personal Information</strong></p>
                    <p>
                        We may collect details such as your name, phone number, email address, age,
                        gender, address, appointment details, and any information you provide through
                        contact or appointment forms.
                    </p>

                    <p><strong>B. Medical Information</strong></p>
                    <p>
                        This includes medical history, symptoms, test results, treatment details,
                        doctor notes, and consultation information shared during your visit or online
                        interactions.
                    </p>

                    <p><strong>C. Technical Information</strong></p>
                    <p>
                        We automatically collect data such as your IP address, browser type, device
                        details, pages visited, and cookies to improve website performance and user
                        experience.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>Your data is used strictly for the following purposes:</p>
                    <ul>
                        <li>Appointment booking and management</li>
                        <li>Providing medical consultation and treatment</li>
                        <li>Maintaining accurate patient and health records</li>
                        <li>Responding to inquiries and offering support</li>
                        <li>Improving website functionality and hospital services</li>
                        <li>Legal, regulatory, and safety compliance</li>
                    </ul>

                    <p>We <strong>never sell or share</strong> your personal or medical information for marketing purposes.</p>

                    <h2>4. Sharing of Information</h2>
                    <p>We may share your information only under these circumstances:</p>
                    <ul>
                        <li><strong>Authorized medical staff</strong> involved in your care</li>
                        <li><strong>Diagnostic centers or labs</strong> when needed for tests</li>
                        <li><strong>Legal or regulatory authorities</strong> if required by law</li>
                    </ul>
                    <p>
                        Any shared information is handled with strict confidentiality and professionalism.
                    </p>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement strong security measures such as encrypted systems, secure servers,
                        restricted access controls, and regular safety audits to ensure your data is
                        protected against unauthorized access, loss, or misuse.
                    </p>

                    <h2>6. Cookies & Tracking</h2>
                    <p>
                        Our website uses cookies to enhance user experience, analyze traffic, and improve
                        functionality. You may disable cookies in your browser settings, but some features
                        may not work properly.
                    </p>

                    <h2>7. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal and medical information</li>
                        <li>Request corrections to inaccurate data</li>
                        <li>Request deletion of data as per legal guidelines</li>
                        <li>Withdraw consent for non-essential data usage</li>
                        <li>Contact us regarding any privacy concerns</li>
                    </ul>

                    <h2>8. Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party sites. We are not responsible for
                        the content or privacy policies of these external websites. We recommend reviewing
                        their privacy practices before using them.
                    </p>

                    <h2>9. Children’s Privacy</h2>
                    <p>
                        We do not knowingly collect personal information from children below 16 years
                        without parental consent. Parents may request access or deletion of such data if
                        collected unintentionally.
                    </p>

                    <h2>10. Updates to This Policy</h2>
                    <p>
                        We may update this Privacy Policy periodically to meet legal, technological,
                        or operational changes. Updated versions will be posted on this page.
                    </p>

                    <h2>11. Contact Information</h2>
                    <p>
                        For any questions regarding this Privacy Policy, you may contact our helpdesk:
                    </p>
                    <p>
                        <strong>Phone:</strong> +91-9866635947<br />
                        <strong>Email:</strong> padmavatimedicalcenter2010@gmail.com<br />
                        <strong>Address:</strong>  Plot No. 12-13-60, Main Road, Tarnaka & Plot No. 12-13-67/2, Sadhashiv Nagar, Lane Adj. to Sanman Hotel, 
                        Street No. 5, Tarnaka, Secunderabad, 500017
                    </p>

                </div>
            </section>

        </>
    );
}

export default PrivacyPolicy;
