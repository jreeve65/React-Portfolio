import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import cosmicQuest from "../assets/images/cq3.png";
import deathStar from "../assets/images/Death-star.png"
import nomad from "../assets/images/nomad.png";
import cardBack from"../assets/images/default-cardback.png"
import notetaker from "../assets/images/note-taker2.png"
import "../assets/css/Portfolio.css"
const cqRepo="https://github.com/jreeve65/Cosmic-Quest"
const cqApp ="https://cosmic-quest.onrender.com/"
const cqDescription ="A MERN stack application that features an exicting text-based choose your own adventure game set in a SciFi setting. Features include account creation, user authorization, and auto save."
const nomadDescription = "A web application that taps into the google places api; designed to let one find high rated resturants near your chosen location.  Integrates google maps advanced markers which direct you to the venue's google maps page when clicked on."
const employeeTrackerDes ="A command-line application that allows one to manage an employee database. App features node js, inquierer, and SQL with a little Star Wars Flair added for fun."
const noteTakerDes ="A note taking app to help organize and plan your schedule.  Can be used to write reminders or jot down useful thoughts or ideas app uses Nodejs and Express."

const ecommerceDes ="A  Api designed to be a used for e-commerce. Api utilizes Postgres, Sql, Express, JavaScript, and nodejs"

const socialNetworkAPI ="A Api built to be used for A social media site,  Technologies used were Mongoose, Mongodb, Express, JavaScript, and nodejs."

export default function Portfolio() {
  return (
    <div className="bg-dark text-warning mx-0 my-0" id="card-page">

      <h1>Portfolio</h1>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col">
          <PortfolioCard projectImg={cosmicQuest} Title='Cosmic Quest' Description={cqDescription} Githuburl={cqRepo} Appurl={cqApp}/>
          </div>
          <div className="col">
        
        <PortfolioCard projectImg={nomad} Title ='Nomad' Description={nomadDescription} Githuburl="https://github.com/breannacamacho/Nomad"></PortfolioCard>
      </div>
      <div className="col">

        <PortfolioCard projectImg={deathStar} Title="Employee-Tracker" Description={employeeTrackerDes} Githuburl="https://github.com/jreeve65/Employee-tracker"></PortfolioCard>
       </div>
       <div className="row d-flex justify-content-center">
        <div className="col">
          <PortfolioCard projectImg={notetaker} Title="Note-Taker" Description={noteTakerDes}Githuburl="https://github.com/jreeve65/Notetaker" Appurl="https://note-taker-1b3e.onrender.com"></PortfolioCard>
        </div>
        <div className="col">
          <PortfolioCard projectImg={cardBack} Title ="E-Commerce-API" Description={ecommerceDes} Githuburl="https://github.com/jreeve65/e-commerce-webserver"></PortfolioCard>
        </div>
        <div className="col">
          <PortfolioCard projectImg={cardBack} Title="Social-Network-API" Description={socialNetworkAPI} Githuburl="https://github.com/jreeve65/social-networkAPI"></PortfolioCard>
        </div>
       </div>
       
        {/*add new row here for future projects */}

      </div>
    </div>
    </div>

  );
}
