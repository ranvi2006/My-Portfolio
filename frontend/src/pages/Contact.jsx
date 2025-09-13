import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [profile, setProfile] = useState({
    _id: "6843d9ab739d10b4513d4453",
    name: "Raju Kumar Mandal",
    title: "Associate Full Stack Software Engineer",
    professions: "Web Developer | Java & MERN Stack",
    doingJob: false,
    emails: ["rajurk2002@gmail.com", "rajurk2003@gmail.com"],
    phoneNumbers: ["6204556962", "6203657421"],
    githubLink: "https://github.com/ranvi2006",
    linkedinLink: "https://www.linkedin.com/in/raju-fullstack/",
    youtubeLinks: "https://www.youtube.com/@wemakecorder",
    facebookLink: "",
    instagramLink: "",
    protfolioLink: "",
    resumeLink: "",
    location: {
      country: "India",
      state: "Jharkhand",
      district: "Giridig",
      city: "Suriya",
      post: "Mandramo",
      village: "Aurwatand",
    },
  });

  useEffect(() => {
    async function getProfile() {
      // Uncomment when backend is ready
      // try {
      //   const url = import.meta.env.VITE_MONGO_URL + "/getProfile";
      //   const res = await axios.get(url);
      //   if (res.data.success) {
      //     setProfile(res.data.data);
      //   }
      // } catch (err) {
      //   console.error("Error fetching profile:", err);
      // }
    }
    getProfile();
  }, []);

  if (!profile) {
    return <div style={{ color: "white", textAlign: "center" }}>Loading...</div>;
  }

  const socialLinks = [
    { name: "LinkedIn", url: profile.linkedinLink },
    { name: "GitHub", url: profile.githubLink },
    { name: "YouTube", url: profile.youtubeLinks },
    { name: "Facebook", url: profile.facebookLink },
    { name: "Instagram", url: profile.instagramLink },
    { name: "Portfolio", url: profile.protfolioLink },
    { name: "Resume", url: profile.resumeLink },
  ].filter(link => link.url);

  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-image">
          <img src={profile.imageUrl || "/media/myimg.png"} alt={profile.name || "Profile"} />
        </div>
        <div className="contact-info">
          <h2>{profile.name}</h2>
          <h4>{profile.professions}</h4>
          <p className="title">{profile.title}</p>
          {profile.doingJob ? (
            <p className="availability">❌ Not Available</p>
          ) : (
            <p className="availability">✅ Available for Work</p>
          )}

          <div className="contact-details">
            <h4>Emails:</h4>
            {profile.emails.map((email, index) => (
              <p key={index}>{email}</p>
            ))}

            <h4>Phone Numbers:</h4>
            {profile.phoneNumbers.map((phone, index) => (
              <p key={index}>{phone}</p>
            ))}

            <h4>Location:</h4>
            <p>
              {profile.location.village}, {profile.location.city}, {profile.location.district}, {profile.location.state},{" "}
              {profile.location.country} - {profile.location.post}
            </p>

            <h4>Social Links:</h4>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
