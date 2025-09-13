import React, { useState, useEffect } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [profile, setProfile] = useState({
    _id: "6843d9ab739d10b4513d4453",
    name: "Raju kumar Mandal",
    title: "Associate Full Stack Software Engineer",
    description:
      "I'm Raju Kumar Mandal, an enthusiastic and motivated Full Stack Software Engineer with a strong foundation in computer science and a passion for solving real-world problems through technology. I recently served as a Backend Developer at Parabit Private Limited, where I was responsible for streamlining the availability and tracking of blood inventories in healthcare systems.",
    shortExperience:
      "With hands-on experience in MERN stack, Java, and SQL.",
    professions: "Web Developer | Java & MERN Stack",
    doingJob: false,
    emails: ["rajurk2002@gmail.com", "rajurk2003@gmail.com"],
    phoneNumbers: ["6204556962", "6203657421"],
    githubLink: "https://github.com/ranvi2006",
    linkedinLink: "https://www.linkedin.com/in/raju-fullstack/",
    youtubeLink:"https://www.youtube.com/@wemakecorder"
    ,
    facebookLink: "",
    instagramLink: "",
    protfolioLink: "",
    resumeLink: "",
    location: {
      country: "india",
      state: "jharkhand",
      district: "giridig",
      city: "suriya",
      post: "mandramo",
      village: "aurwatand",
    },
    skills: {
      technicalSkills: [
        "java",
        "javaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Git",
        "Html",
        "CSS",
      ],
      softSkills: [
        "Problem-solving",
        "Communication",
        "Teamwork",
        "Time management",
        "Learning ability",
        "Self-motivation",
      ],
    },
  });

  useEffect(() => {
    async function getProfile() {
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
              {profile.githubLink && <a href={profile.youtubeLink} target="_blank">Youtube</a>}{"  "}
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
