import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import background from "../assets/images/cpbackground.mp4";
import profileImg from "../assets/images/Profile.png";
import "../assets/css/Portfolio.css"
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
    </div>
  );
}
