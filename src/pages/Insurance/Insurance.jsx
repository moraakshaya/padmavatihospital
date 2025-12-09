import React, { useState, useEffect, useRef } from "react";
import "./Insurance.css"
import {
    FaHeadset,       // 24/7 Support
    FaBolt,          // Fast Claims
    FaHandshake,     // Trusted Partner
    FaShieldAlt      // Secure & Reliable
} from "react-icons/fa";


function Insurance() {

    // WHY CHOOSE US DATA
    const benefitsData = [
        { icon: <FaHeadset />, title: "24/7 Support", desc: "We are always here to assist you." },
        { icon: <FaBolt />, title: "Fast Claims", desc: "Quick and hassle-free claim process." },
        { icon: <FaHandshake />, title: "Trusted Partner", desc: "Serving thousands of happy customers." },
        { icon: <FaShieldAlt />, title: "Secure & Reliable", desc: "Your data and policy are safe with us." }
    ];

    const insuranceCompanies = [
        { name: "The New India Assurance Company Limited", img: "/insurance/newindia.webp" },
        { name: "Oriental Insurance Co. Ltd", img: "/insurance/oriental.webp" },
        { name: "National Insurance Co. Ltd", img: "/insurance/national.webp" },
        { name: "United India Insurance Co Ltd", img: "/insurance/united.webp" },
        { name: "ICICI Lombard General Insurance Co. Ltd", img: "/insurance/icici.webp" },
        { name: "TATA AIG General Insurance Co. Ltd.", img: "/insurance/tataaig.webp" },
        { name: "Star Health & Allied Insurance", img: "/insurance/star.webp" },
        { name: "Safe way Insurance", img: "/insurance/safeway.webp" },
        { name: "Heritage Health Insurance", img: "/insurance/heritage.webp" },
        { name: "SBI General Insurance Co. Ltd", img: "/insurance/sbi.webp" },
        { name: "FHPL Insurance", img: "/insurance/fhpl.webp" },
        { name: "Volo Health Insurance", img: "/insurance/volo.webp" }
    ];


    //GET A QUOTE FORM POP-UP MODAL
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        insuranceType: "",
        startDate: "",
        coverageAmount: "",
        notes: ""
    });

    // Toggle modal visibility
    const handleModal = () => setShowModal(!showModal);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Quote requested for ${formData.name}`);
        setFormData({
            name: "",
            email: "",
            phone: "",
            insuranceType: "",
            startDate: "",
            coverageAmount: "",
            notes: ""
        });
        setShowModal(false);
    };


    //HERO SECTION ANIMATION
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        textRef.current.classList.add("slide-in-left");
                        imageRef.current.classList.add("slide-in-bottom");
                        setHasAnimated(true); // Animate only once
                    }
                });
            },
            { threshold: 0.3 } // triggers when 30% of section is visible
        );

        if (textRef.current && imageRef.current) {
            observer.observe(textRef.current);
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);



    //INSURANCE SECTION ANIMATION
    // Section-specific ref & state
    const insuranceListRef = useRef();
    const [insuranceListAnimate, setInsuranceListAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInsuranceListAnimate(true);
                    observer.unobserve(insuranceListRef.current); // animate only once
                }
            },
            { threshold: 0.3 }
        );

        if (insuranceListRef.current) {
            observer.observe(insuranceListRef.current);
        }
    }, []);

    //WHYCHOOSEUS SECTION ANIMATION
    // Section-specific ref & state
    const benefitsRef = useRef();
    const [animateBenefits, setAnimateBenefits] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateBenefits(true);
                    observer.unobserve(benefitsRef.current); // animate only once
                }
            },
            { threshold: 0.3 }
        );

        if (benefitsRef.current) {
            observer.observe(benefitsRef.current);
        }
    }, []);

    //INSURANCE PROCESS SECTION ANIMATION

    // Section-specific ref & state
    const processRef = useRef();
    const [animateProcess, setAnimateProcess] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateProcess(true);
                    observer.unobserve(processRef.current); // animate only once
                }
            },
            { threshold: 0.3 }
        );

        if (processRef.current) {
            observer.observe(processRef.current);
        }
    }, []);


    return (
        <>
            {/* HERO SECTION */}
            <section className="insu-hero">
                <div className="insu-hero-content" ref={textRef}>
                    <h1>Protecting What Matters Most</h1>
                    <p>Comprehensive insurance solutions tailored for you.</p>
                    <button className="cta-primary" onClick={handleModal}>
                        Get a Quote
                    </button>
                </div>
                <div className="insu-hero-image" ref={imageRef}>
                    <img src="/insurance/insurance.png" alt="Insurance illustration" />
                </div>
            </section>

            {/* MODAL FORM */}
            {showModal && (
                <div className="modal-overlay" onClick={handleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Request a Quote</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Name</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Phone Number</label>
                            </div>
                            {/* <div className="form-group">
                                <select
                                    name="insuranceType"
                                    value={formData.insuranceType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Select Insurance Type
                                    </option>
                                    <option value="Health Insurance">Health Insurance</option>
                                    <option value="Life Insurance">Life Insurance</option>
                                    <option value="Car Insurance">Car Insurance</option>
                                    <option value="Home Insurance">Home Insurance</option>
                                </select>
                                <label>Insurance Type</label>
                            </div> */}
                            <div className="form-group">
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                />
                                <label>Policy Start Date</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="coverageAmount"
                                    value={formData.coverageAmount}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                <label>Coverage Amount</label>
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder=""
                                ></textarea>
                                <label>Additional Notes</label>
                            </div>
                            <button type="submit" className="submit-btn">
                                Submit
                            </button>
                            <button type="button" className="close-btn" onClick={handleModal}>
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* INSURANCE PARTNERS SECTION */}
            <section className="insurance-list" ref={insuranceListRef}>
                <h2 className={insuranceListAnimate ? "insurance-title animate-insurance-title" : "insurance-title"}>
                    Our Insurance Partners
                </h2>

                <ul className="insurance-items">
                    {insuranceCompanies.map((company, index) => (
                        <li
                            key={index}
                            className={insuranceListAnimate ? "insurance-row animate-insurance-row" : "insurance-row"}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <img src={company.img} alt={company.name} />
                            <span>{company.name}</span>
                        </li>
                    ))}
                </ul>
            </section>


            {/* WHY CHOOSE US SECTION */}
            <section className="benefits" ref={benefitsRef}>
                <h2 className={animateBenefits ? "benefits-title animate-benefits-title" : "benefits-title"}>
                    Why Choose Us
                </h2>

                <div className="benefits-grid">
                    {benefitsData.map((item, index) => (
                        <div
                            className={animateBenefits ? "benefit-card animate-benefit-card" : "benefit-card"}
                            key={index}
                            style={{ transitionDelay: `${index * 0.1}s` }} // stagger animation
                        >
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* INSURANCE PROCESS SECTION */}
            <section className="insurance-process" ref={processRef}>
                <h2 className={animateProcess ? "process-title animate-process-title" : "process-title"}>
                    How Our Insurance Process Works
                </h2>

                <div className="process-steps">
                    {[
                        {
                            number: "1",
                            title: "Visit Our Hospital",
                            desc: "The patient visits for consultation or treatment.",
                        },
                        {
                            number: "2",
                            title: "Submit Insurance Details",
                            desc: "Provide your insurance card, TPA ID, or policy number.",
                        },
                        {
                            number: "3",
                            title: "Verification & Approval",
                            desc: "Our insurance desk verifies your coverage with the insurance provider.",
                        },
                        {
                            number: "4",
                            title: "Cashless / Reimbursement",
                            desc: "After approval, your treatment billing is processed smoothly.",
                        },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className={animateProcess ? "process-step animate-process-step" : "process-step"}
                            style={{ transitionDelay: `${index * 0.1}s` }} // stagger animation
                        >
                            <div className="step-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>



        </>
    )
}
export default Insurance;