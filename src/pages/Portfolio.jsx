import React from "react";
import PortfolioCard from "../components/PortfolioCard";
// import background from "../assets/images/cpbackground.mp4";
import bonfire from "../assets/images/bonfirelogo.png";
import profileImg from "../assets/images/Profile.png";
import nomad from "../assets/images/nomad.png";
import "../assets/css/Portfolio.css"
export default function Portfolio() {
  return (
    <div className="bg-dark text-warning mx-0 my-0" id="card-page">

      <h1>Portfolio</h1>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="row">
          <PortfolioCard/>



        </div>
        {/*add new row here for future projects */}

      </div>
    </div>

  );
}
