import React, { useEffect, useState } from 'react';
import './About.css';
import EductionCard from '../component/EducationCard/EductionCard';
import axios from 'axios';

const About = () => {
  const [schools, setSchools] = useState([
  {
    _id: "6843e069739d10b4513d4456",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "IES UNIVERSITY BHOPAL",
    grade: "A+",
    startDate: "2023-09",
    endDate: "2027-08",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.yD5o2qFvmJtIV_1wH3lp2AHaDo&pid=Api&P=0&h=180",
    skills: ["Java", "React", "Node.js", "MongoDB"],
    activities: [
      "Gained strong problem-solving skills through participation in coding competitions.",
      "Collaborated on multiple software development projects.",
    ],
  },
  {
    _id: "6843e069739d10b4513d4457",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science (PCM)",
    institution: "S.R.S.Sr +2 High School",
    grade: "A+",
    startDate: "2020-04",
    endDate: "2022-03",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.caZpICGhKh7_KCYF5r9yuwHaFj&pid=Api&P=0&h=180",
    skills: ["Physics", "Chemistry", "Mathematics"],
    activities: [
      "Completed senior secondary education with a focus on Science (PCM).",
    ],
  },
  {
    _id: "6843e069739d10b4513d4458",
    degree: "Matriculation (10th)",
    field: "Science & Mathematics",
    institution: "S.R.S.R +2 School",
    grade: "A",
    startDate: "2019-03",
    endDate: "2020-04",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.caZpICGhKh7_KCYF5r9yuwHaFj&pid=Api&P=0&h=180",
    skills: ["Mathematics", "Science", "Problem Solving"],
    activities: [
      "Completed my secondary education with a strong focus on Science and Math.",
    ],
  },
]);
  

  useEffect(() => {
    async function getSchools() {
      
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
