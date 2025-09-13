import React, { useEffect, useState } from 'react';
import ProjectCard from '../component/ProjectCard/ProjectCard.jsx';
import ContactCard from '../component/Contact/ContactCard.jsx';
import axios from "axios";

export default function Home() {
  const [projects, setProjects] = useState( [
  {
    _id: "683fbec5b97b100ec8608948",
    title: "Zerodha Clone",
    shortDescription: "A stock trading platform clone with real-time charts.",
    detailedDescription:
      "This project replicates the core features of Zerodha with live data charts, user authentication, portfolio management, and more, offering a real-time stock trading simulation experience.",
    startDate: "2025-03-01",
    endDate: "2025-04-04",
    projectStatus: "Completed",
    isFeatured: true,
    projectImage: "/media/zerodha.png",
    githubLink: "https://github.com/ranvi2006/Zerodha-App",
    liveDemoLink: "https://zerodha-app-six.vercel.app/",
    starsCount: 57,
    forksCount: 12,
    watchingCount: 10,
    rank: 1,
    tags: ["Stock Trading", "Finance", "Real-Time Charts"],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js", "JWT"],
  },
  {
    _id: "684269198277994b665c45d7",
    title: "Foodie App – Simplifying Food Ordering!",
    shortDescription:
      "A user-friendly food ordering platform with secure login and smooth backend operations.",
    detailedDescription:
      "The Foodie App is a full-stack food ordering platform built using Node.js, Express, and React, offering authentication, real-time order tracking, and a clean UI for browsing and ordering food.",
    startDate: "2025-04-01",
    endDate: "2025-05-10",
    projectStatus: "Completed",
    isFeatured: true,
    projectImage: "/media/foodie.png",
    githubLink:
      "https://github.com/ranvi2006/Apna-Collage-ALL-Data/tree/main/Major%20Project",
    liveDemoLink:
      "https://www.linkedin.com/posts/raju-fullstack_foodie-app-simplifying-food-ordering-activity-7294935902424903681-aZIl",
    starsCount: 34,
    forksCount: 8,
    watchingCount: 6,
    rank: 2,
    tags: ["Food Delivery", "Full Stack", "E-Commerce"],
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "CSS"],
  },
  {
    _id: "68426a198277994b665c45d8",
    title: "StayEase – Airbnb Clone for Seamless Bookings!",
    shortDescription:
      "A full-stack Airbnb-like platform for listing, exploring, and booking accommodations.",
    detailedDescription:
      "StayEase is a full-stack web application inspired by Airbnb. Users can register, list properties, browse listings, book stays, and leave reviews. The app includes secure authentication, image uploads, and booking logic.",
    startDate: "2025-05-15",
    endDate: "2025-06-01",
    projectStatus: "Completed",
    isFeatured: true,
    projectImage: "/media/airbnb.png",
    githubLink: "https://github.com/ranvi2006/StayEase-App",
    liveDemoLink:
      "https://www.linkedin.com/posts/raju-fullstack_ive-built-a-platform-similar-to-airbnb-where-activity-7274611566216445952-xdFT",
    starsCount: 42,
    forksCount: 10,
    watchingCount: 7,
    rank: 3,
    tags: ["Booking System", "Rental Platform", "Real Estate"],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
  },
]);
  const [profile, setProfile] = useState( {
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
    phoneNumbers: ["6204556962",],
    githubLink: "https://github.com/ranvi2006",
    linkedinLink: "https://www.linkedin.com/in/raju-fullstack/",
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
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchProjects = async () => {
      // const url = import.meta.env.VITE_MONGO_URL + "/getProjects";
      // const res = await axios.get(url);
      // if (res.data.success) {
      //   setProjects(res.data.data);
      // }
    };

    const fetchProfile = async () => {
      // const url = import.meta.env.VITE_MONGO_URL + "/getProfile";
      // const res = await axios.get(url);
      // if (res.data.success) {
      //   setProfile(res.data.data);
      // }
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
