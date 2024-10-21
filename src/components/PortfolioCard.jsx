import React from "react";
import {useState} from 'react'
import ReactCardFlip from "react-card-flip";
const PortfolioCard = () => {
    const [isFlipped,setIsFlipped] = useState(false);

    function flipCard(){
        setIsFlipped(!isFlipped);
    }

    return (

   
    
        <div>
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped} >
                <div className="card" onMouseEnter ={flipCard}>
                    <h1>Front</h1>
                </div>
                <div className="card card-back" onMouseLeave={flipCard}>
                    <h1>Back</h1>
                </div>
            </ReactCardFlip>
        </div>
       
    );
}

export default PortfolioCard;