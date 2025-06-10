import React, { useState, useEffect } from "react";
import "./Certificate.css";
import axios from "axios";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function getCertificates() {
      try {
        const url = import.meta.env.VITE_MONGO_URL + "/getCertificates";
        const res = await axios.get(url);
        if (res.data.success) {
          setCertificates(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    }

    getCertificates();
  }, []);

  return (
    <section className="certificate-section">
      <h2 className="section-title">📜 Certifications</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p><strong>{cert.issuer}</strong></p>
              <p><span>Issued:</span> {cert.issued}</p>
              <p><span>Credential ID:</span> {cert.id}</p>
              <p className="skills"><span>Skills:</span> {cert.skills.join(", ")}</p>
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-view"
              >
                Show credential
              </a>
            </div>
            <div className="cert-image">
              <img src={cert.image} alt={`${cert.title} certificate`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
