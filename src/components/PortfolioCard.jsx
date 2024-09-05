import React from "react";
import innercard from "../assets/images/innercardback.mp4"
const PortfolioCard = ({ video, projectImage, projectTitle, projectDescription, projectLink }) => {
    return (
        // <div className="container mt-4">
            
            <div className="card bg-dark text-white position-relative overflow-hidden m-3">
                <video className="card-img" autoPlay muted loop>
                    <source src={video} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
                 
                
                <div className="card-img-overlay d-flex flex-direction-column flex-wrap-nowrap align-items-center justify-content-center">
                <video className="card-img-inner" autoPlay muted loop>
                    <source src={innercard} type='video/mp4' />
                    Your browser does not support the video tag.
                    </video>
                    <img src={projectImage} alt="Project" className="img-fluid my-1" />
                    <div className="inner-card card bg-dark text-dark">
                   
                        
                        <div className="card-body bg-light">
                       
                            <h5 className="card-title text-center">{projectTitle}</h5>
                            
                            <p className="card-text">{projectDescription}</p>
                            <a href={projectLink} className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default PortfolioCard;