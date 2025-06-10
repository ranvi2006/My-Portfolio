import React from 'react';
import './ContactCard.css'; // Link to updated CSS below
import { Github, Linkedin } from 'lucide-react';

const ProfileBanner = ({ profile }) => {
  return (
    <div className="profile-banner">
      {/* Left */}
      <div className="profile-section">
        {profile.emails.map((email, index) => (
          <p key={index}>{email}</p>
        ))}
        {profile.phoneNumbers.map((phone, index) => (
          <p key={index}>+91 {phone}</p>
        ))}
      </div>

      {/* Middle */}
      <div className="profile-section middle">
        <p>
          <strong>Portfolio:</strong>{' '}
          {profile.protfolioLink.replace("https://", "")}
        </p>
        <p>
          <Github size={16} style={{ verticalAlign: 'middle' }} />{' '}
          <a href={profile.githubLink} target="_blank" rel="noopener noreferrer">
            {profile.githubLink.replace("https://", "")}
          </a>
        </p>
        <p>
          <Linkedin size={16} style={{ verticalAlign: 'middle' }} />{' '}
          <a href={profile.linkedinLink} target="_blank" rel="noopener noreferrer">
            {profile.linkedinLink.replace("https://", "")}
          </a>
        </p>
      </div>

      {/* Right */}
      <div className="profile-section quote">
        <p>
          "Code is like humor. When you have to explain it, it’s bad."
        </p>
      </div>
    </div>
  );
};

export default ProfileBanner;
