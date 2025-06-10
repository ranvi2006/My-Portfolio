import React, { useEffect, useState } from "react";
import "./Skill.css";
import axios from "axios";

const Skill = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const getSkill = async () => {
      try {
        const url = import.meta.env.VITE_MONGO_URL + "/getProfile";
        const res = await axios.get(url);
        if (res.data.success && res.data.data.skills) {
          setSkills(res.data.data.skills);
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };

    getSkill();
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-header fade-in">
        <h2>🚀 Skills & Strengths</h2>
        <p>What I bring to the table</p>
      </div>

      <div className="skills-grid-header">
        <h2>Technical Skills</h2>
        <h2>Soft Skills</h2>
      </div>

      <div className="skills-grid-row">
        {skills?.technicalSkills?.map((res, index) => (
          <div key={index} className="skill-box">
            {res}
          </div>
        ))}
      </div>

      <div className="skills-grid-row">
        {skills?.softSkills?.map((res, index) => (
          <div key={index} className="skill-box">
            {res}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
