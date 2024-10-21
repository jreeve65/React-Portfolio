import React from "react";
import innercard from "../assets/images/innercardback.mp4"
const PortfolioCard = ({ backgroundImg, projectImage, projectTitle, projectDescription, projectLink }) => {
    return (
        // <div className="container mt-4">

        <div className="card m-3">




            <img src={projectImage} alt="Project" className="img-fluid my-1" />
            <div className="inner-card card bg-dark text-dark">


                <div className="card-body bg-light">

                    <h5 className="card-title text-center">{projectTitle}</h5>

                    <p className="card-text">{projectDescription}</p>
                    <a href={projectLink} className="btn btn-primary">Click Here</a>
                </div>
            </div>
        </div>
        // </div>
    );
}

export default PortfolioCard;