import React from "react";

const SocialIcon = ({ icon, href }) => {
  return (
    <a className="social-icon" href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default SocialIcon;
