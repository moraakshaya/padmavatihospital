import React, { useRef, useEffect, useState } from "react";
import "./terms-&-conditions.css";
import termscond from "../../assets/termscond.png";

function TermsAndConditions() {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate(true);
                        observer.disconnect(); // run animation only once
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
            <section className="tc-hero">
                <div
                    className={`tc-hero-content ${animate ? "slide-in-left" : ""}`}
                    ref={textRef}
                >
                    <h1>Terms & Conditions</h1>
                    <p>Please read these terms and conditions carefully before using our hospital services.</p>
                </div>

                <div
                    className={`tc-hero-image ${animate ? "slide-in-bottom" : ""}`}
                    ref={imageRef}
                >
                    <img src={termscond} alt="Terms and Conditions" />
                </div>
            </section>

            {/* TERMS CONTENT */}
            <section className="tc-content">
                <div className="tc-wrapper">

                    <h2>1. Introduction</h2>
                    <p>
                        These Terms and Conditions ("Terms") outline the rules and regulations for using the
                        services provided by our hospital, including online appointment booking, medical
                        consultations, diagnostic services, and website usage. By accessing or using our
                        services, you agree to comply with these Terms.
                    </p>

                    <h2>2. Medical Services</h2>
                    <p>
                        All medical services are provided by qualified healthcare professionals. However,
                        medical outcomes may vary, and no guarantee is provided for specific results.
                        Emergency cases will be given priority based on medical necessity.
                    </p>

                    <h2>3. Appointments & Scheduling</h2>
                    <p>
                        Appointment slots are subject to doctor availability. The hospital reserves the
                        right to reschedule or cancel appointments in case of emergencies, operational
                        reasons, or doctor unavailability. Patients will be notified through the contact
                        information provided at the time of booking.
                    </p>

                    <h2>4. Patient Responsibilities</h2>
                    <p>
                        Patients must provide accurate and complete information including medical history,
                        current medications, allergies, and personal details. Failure to provide accurate
                        information may impact the quality of care and may result in the hospital declining
                        services.
                    </p>

                    <h2>5. Payments & Billing</h2>
                    <p>
                        Payments for consultations, treatments, diagnostic tests, and other services must
                        be made according to hospital billing policies. The hospital reserves the right to
                        refuse or delay services in case of non-payment or incomplete documentation.
                        Refunds, if applicable, will follow the hospital's refund policy.
                    </p>

                    <h2>6. Health Records & Confidentiality</h2>
                    <p>
                        All patient information and medical records are handled confidentially in accordance
                        with applicable privacy laws. Records may be accessed only by authorized personnel.
                        Patients may request copies of their records as per hospital policy.
                    </p>

                    <h2>7. Website & Online Services</h2>
                    <p>
                        Information provided on our website is for general understanding and should not be
                        considered as a substitute for professional medical advice. The hospital is not
                        responsible for any errors, outdated information, or misuse of website content.
                    </p>

                    <h2>8. Limitation of Liability</h2>
                    <p>
                        While we strive to provide the highest quality of care, the hospital is not liable
                        for indirect, incidental, or consequential damages arising out of the use of our
                        services, except where prohibited by law.
                    </p>

                    <h2>9. Emergency Situations</h2>
                    <p>
                        In case of medical emergencies, patients are advised to contact emergency services
                        directly. Online booking or website queries should not be used for urgent medical needs.
                    </p>

                    <h2>10. Changes to Terms</h2>
                    <p>
                        The hospital may revise these Terms at any time to comply with legal, operational,
                        or service-related changes. Continued use of our services after updates constitutes
                        acceptance of the revised Terms.
                    </p>

                    <h2>11. Contact Information</h2>
                    <p>
                        For questions regarding these Terms & Conditions, patients may contact the hospital
                        helpdesk or visit the reception for assistance.
                    </p>

                </div>
            </section>
        </>
    );
}

export default TermsAndConditions;
