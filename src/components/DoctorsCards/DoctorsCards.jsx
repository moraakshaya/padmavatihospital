import React from "react";
import "./DoctorsCards.css";
import profile from "../../assets/doctors/profile.png"

function DoctorsCards({ image, name, department, qualification, regNo, phone, availability }) {
  return (
    <div className="doctor-card">
      <div className="doctor-img">
        {image ? <img src={image} alt={name} /> : <img src={profile} alt="Default Profile" />}
      </div>

      <div className="doctorcard-info">
        <h3>{name}</h3>

        <p className="department">{department}</p>

        <p className="qualification">{qualification}</p>
        <p className="reg-no">Reg No: {regNo}</p>

        {/* Phone + Vertical Line + Availability */}
        <div className="doctor-contact-row">
          <span className="availability">{availability}</span>
          <span className="divider"></span>
          <span className="phone">{phone}</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorsCards;
