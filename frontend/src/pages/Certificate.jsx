import React, { useState, useEffect } from "react";
import "./Certificate.css";
import axios from "axios";

const Certificate = () => {
  const [certificates, setCertificates] = useState([
  {
    _id: "6843e0fb739d10b4513d445d",
    id: "671639f4cb95d98429043936",
    title: "Certificate of Completion",
    issuer: "Apna College LPU",
    issued: "Feb 2025",
    image: "/media/devlopment.png",
    skills: ["SQL", "CSS", "HTML", "JavaScript", "MERN Stack"],
  },
  {
    _id: "6843e0fb739d10b4513d445e",
    id: "66ed440ba1f3c362ad0580d6",
    title: "CERTIFICATE OF COMPLETION",
    issuer: "Apna College",
    issued: "Sep 2024",
    image: "/media/java.png",
    skills: ["Java", "Data Structures & Algorithms (DSA)"],
  },
  {
    _id: "6843e0fb739d10b4513d445f",
    id: "66456ef270580a95de8e2294",
    title: "Web Development - Learn to Build Real-Time Website Like Twitter",
    issuer: "NullClass",
    issued: "May 2024",
    image: "/media/null.png",
    skills: [
      "Real-Time Web Development",
      "API Development",
      "Performance Optimization",
      "WebSockets / Socket.io",
      "Authentication & Security (JWT, OAuth)",
    ],
  },
]);
 

  useEffect(() => {
    async function getCertificates() {
      // try {
      //   const url = import.meta.env.VITE_MONGO_URL + "/getCertificates";
      //   const res = await axios.get(url);
      //   if (res.data.success) {
      //     setCertificates(res.data.data);
      //   }
      // } catch (error) {
      //   console.error("Error fetching certificates:", error);
      // }
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
