import React, { useEffect, useState } from 'react';
import './About.css';
import EductionCard from '../component/EducationCard/EductionCard';
import axios from 'axios';

const About = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function getSchools() {
      try {
        const url = import.meta.env.VITE_MONGO_URL + "/getEducations";
        const res = await axios.get(url);
        if (res.data.success) {
          setSchools(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch education data:", error);
      }
    }

    getSchools();
  }, []);

  return (
    <div className="education-container">
      <h2>🎓 My Education</h2>
      <div className="education-list">
        {schools.map((edu, index) => (
          <EductionCard edu={edu} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
