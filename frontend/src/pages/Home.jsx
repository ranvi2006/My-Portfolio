import React, { useEffect, useState } from 'react';
import ProjectCard from '../component/ProjectCard/ProjectCard.jsx';
import ContactCard from '../component/Contact/ContactCard.jsx';
import axios from "axios";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const url = import.meta.env.VITE_MONGO_URL + "/getProjects";
      const res = await axios.get(url);
      if (res.data.success) {
        setProjects(res.data.data);
      }
    };

    const fetchProfile = async () => {
      const url = import.meta.env.VITE_MONGO_URL + "/getProfile";
      const res = await axios.get(url);
      if (res.data.success) {
        setProfile(res.data.data);
      }
    };

    Promise.all([fetchProjects(), fetchProfile()])
      .catch((error) => console.error("Error loading home data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      padding: '40px 20px',
      minHeight: '100vh',
      color: 'white',
      fontFamily: "'Segoe UI', sans-serif",
    }}>
      
      {/* === Profile Section === */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <div style={{ flex: "1 1 300px", maxWidth: "500px" }}>
          <h1 style={{ fontSize: "2rem", paddingTop: "20px" }}>{profile.name || "Your Name"}</h1>
          <h2 style={{ fontSize: "1.5rem", color: "#ccc" }}>{profile.title || "Your Title"}</h2>
          <p style={{ color: "gray", fontSize: ".9rem", whiteSpace: "pre-wrap", marginTop: "10px" }}>
            {profile.description || "Your description goes here..."}
          </p>
          <p style={{ color: "gray", fontSize: ".9rem", whiteSpace: "pre-wrap", marginTop: "10px" }}>
            {profile.shortExperience || "Your experience summary here..."}
          </p>
        </div>

        <div style={{ flex: "1 1 250px", textAlign: "center" }}>
          <img
            src={profile.imageUrl || "/media/myimg.png"}
            alt={profile.name || "Profile"}
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px -10px rgba(222, 229, 228, 0.4)"
            }}
          />
        </div>
      </div>

      {/* === Projects Section === */}
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>🚀 Featured Projects</h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          paddingBottom: "10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="hide-scrollbar"
      >
        {projects.map((res, i) => (
          <ProjectCard project={res} key={res._id || i} />
        ))}
      </div>

      {/* === Contact Section === */}
      <h2 style={{ fontSize: '2rem', margin: '40px 0 20px' }}>📬 Contact Me</h2>
      <ContactCard profile={profile} />
    </div>
  );
}
