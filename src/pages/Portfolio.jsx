import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import cosmicQuest from "../assets/images/cq3.png";
import profileImg from "../assets/images/Profile.png";
import nomad from "../assets/images/nomad.png";
import "../assets/css/Portfolio.css"
const cqRepo="https://github.com/jreeve65/Cosmic-Quest"
const cqApp ="https://cosmic-quest.onrender.com/"

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."; 
export default function Portfolio() {
  return (
    <div className="bg-dark text-warning mx-0 my-0" id="card-page">

      <h1>Portfolio</h1>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="row">
          <PortfolioCard projectImg={cosmicQuest} Title='Cosmic Quest' Description={description} Githuburl={cqRepo} Appurl={cqApp}/>
          



        </div>
        <PortfolioCard projectImg={nomad} Title ='Nomad' Description={description} Githuburl="some url"></PortfolioCard>
        {/*add new row here for future projects */}

      </div>
    </div>

  );
}
