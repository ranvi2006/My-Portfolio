import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const url = import.meta.env.VITE_MONGO_URL + "/getProfile";
        const res = await axios.get(url);
        if (res.data.success) {
          setProfile(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    }

    getProfile();
  }, []);

  if (!profile) {
    return <div style={{ color: "white", textAlign: "center" }}>Loading...</div>;
  }

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-image">
          <img src={profile.imageUrl || "/media/myimg.png"} alt={profile.name || "Profile"} />
        </div>
        <div className="contact-info">
          <h2>{profile.name}</h2>
          <h4>{profile.professions}</h4>
          {profile.doingJob ? (
            <p className="availability">❌ Not Available</p>
          ) : (
            <p className="availability">✅ Available for Work</p>
          )}

          <div className="contact-details">
            {profile.location?.country && (
              <p><strong>📍 Location:</strong> {profile.location.country}</p>
            )}
            {profile.emails?.length > 0 && (
              <p><strong>📧 Email:</strong> {profile.emails.join(", ")}</p>
            )}
            {profile.phoneNumbers?.length > 0 && (
              <p><strong>📞 Phone:</strong> {profile.phoneNumbers.join(", ")}</p>
            )}
            <p>
              <strong>🔗 Links:</strong><br />
              {profile.linkedinLink && <a href={profile.linkedinLink} target="_blank">LinkedIn</a>}{" | "}
              {profile.githubLink && <a href={profile.githubLink} target="_blank">GitHub</a>}{" | "}
              {profile.protfolioLink && <a href={profile.protfolioLink} target="_blank">Portfolio</a>}{" | "}
              {profile.resumeLink && <a href={profile.resumeLink} target="_blank">Resume</a>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
