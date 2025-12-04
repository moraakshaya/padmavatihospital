import React, { useState } from "react";
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

    return (
        <>
            {/* HERO SECTION */}
            <section className="insu-hero">
                <div className="insu-hero-content">
                    <h1>Protecting What Matters Most</h1>
                    <p>Comprehensive insurance solutions tailored for you.</p>
                    <button className="cta-primary" onClick={handleModal}>
                        Get a Quote
                    </button>
                </div>
                <div className="insu-hero-image">
                    <img src="/images/insurance-hero.svg" alt="Insurance illustration" />
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
           <section className="insurance-list">
    <h2>Our Insurance Partners</h2>

   <ul className="insurance-items">
    {insuranceCompanies.map((company, index) => (
        <li key={index} className="insurance-row">
            <img src={company.img} alt={company.name} />
            <span>{company.name}</span>
        </li>
    ))}
</ul>

</section>


            {/* WHY CHOOSE US SECTION */}
            <section className="benefits">
                <h2>Why Choose Us</h2>
                <div className="benefits-grid">
                    {benefitsData.map((item, index) => (
                        <div className="benefit-card" key={index}>
                            <div className="icon">{item.icon}</div>  {/* render React icon here */}
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* INSURANCE PROCESS SECTION */}
<section className="insurance-process">
    <h2>How Our Insurance Process Works</h2>

    <div className="process-steps">

        <div className="process-step">
            <div className="step-number">1</div>
            <h3>Visit Our Hospital</h3>
            <p>The patient visits for consultation or treatment.</p>
        </div>

        <div className="process-step">
            <div className="step-number">2</div>
            <h3>Submit Insurance Details</h3>
            <p>Provide your insurance card, TPA ID, or policy number.</p>
        </div>

        <div className="process-step">
            <div className="step-number">3</div>
            <h3>Verification & Approval</h3>
            <p>Our insurance desk verifies your coverage with the insurance provider.</p>
        </div>

        <div className="process-step">
            <div className="step-number">4</div>
            <h3>Cashless / Reimbursement</h3>
            <p>After approval, your treatment billing is processed smoothly.</p>
        </div>

    </div>
</section>



        </>
    )
}
export default Insurance;