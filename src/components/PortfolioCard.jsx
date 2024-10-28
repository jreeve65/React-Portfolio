import React from "react";
import {useState} from 'react'
import ReactCardFlip from "react-card-flip";
const PortfolioCard = ({projectImg, Title, Description}) => {
    const [isFlipped,setIsFlipped] = useState(false);

    function flipCard(){
        setIsFlipped(!isFlipped);
    }

    return (

   
    
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
                <div className="card" onMouseEnter ={flipCard}>
                   <h1 className="title">{Title}</h1>
                    <img src={projectImg} alt=" an image representing a project" className=" front-image"/>
                </div>
                <div className="card card-back" onMouseLeave={flipCard}>
                    <h6>Description:</h6>
                    <p> {Description}</p>
                </div>
            </ReactCardFlip>
        </div>
       
    );
}

export default PortfolioCard;