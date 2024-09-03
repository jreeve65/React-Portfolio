import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import background from "../assets/images/cpbackground.mp4";
import profileImg from "../assets/images/Profile.png";
import "../assets/css/Portfolio.css"
export default function Portfolio() {
  return (
    <div className="container-fluid bg-primary">
      
      <h1>Portfolio</h1>
      <div className="container d-flex justify-content-center mt-5">
      <div className="row">
      <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
      <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
      <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
      
       <div className="row">
       <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      /><PortfolioCard
      video={background}
      projectImage={profileImg}
      projectTitle="Bonfire"
      projectDescription="For more info"
      projectLink="https://www.google.com/"
    />
    <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Bonfire"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
       </div>
      
        
     
      </div>
      </div>
      
    </div>
  );
}
