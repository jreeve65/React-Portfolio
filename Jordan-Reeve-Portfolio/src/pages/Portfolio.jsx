import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import background from "../assets/images/cpbackground.mp4";
import bonfire from "../assets/images/bonfirelogo.png";
import profileImg from "../assets/images/Profile.png";
import nomad from"../assets/images/nomad.png";
import "../assets/css/Portfolio.css"
export default function Portfolio() {
  return (
    <div className="bg-dark text-warning mx-0 my-0">
      
      <h1>Portfolio</h1>
      <div className="container d-flex justify-content-center mt-5">
      <div className="row">
      <PortfolioCard
        video={background}
        projectImage={bonfire}
        projectTitle="Project-Bonfire"
        projectDescription="For more info"
        projectLink="https://bonfire-lgkj.onrender.com"
      />
      <PortfolioCard
        video={background}
        projectImage={nomad}
        projectTitle="Nomad"
        projectDescription="For more info"
        projectLink="https://breannacamacho.github.io/Nomad/"
      />
      <PortfolioCard
        video={background}
        projectImage={profileImg}
        projectTitle="Comming soon!"
        projectDescription="For more info"
        projectLink="https://www.google.com/"
      />
      
    
       </div>
      {/*add new row here for future projects */}        
     
      </div>
      </div>
      
  );
}
