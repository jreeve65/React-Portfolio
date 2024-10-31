import React from "react";
import {useState} from 'react'
import ReactCardFlip from "react-card-flip";
import { handleCardButtons } from "../utils/helpers";

const PortfolioCard = ({projectImg, Title, Description, Githuburl = null,Appurl = null}) => {
    const [isFlipped,setIsFlipped] = useState(false);

    function flipCard(){
        setIsFlipped(!isFlipped);
    }

    if(Githuburl === null && Appurl === null){

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
                        <h4>no buttons</h4>
                    </div>
                </ReactCardFlip>
            </div>
           
        );
    } else if(Appurl === null && Githuburl != null){
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
                        <h4>this will have a git hub button</h4>
                    </div>
                </ReactCardFlip>
            </div>
           
        );
    } 

    else{
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
                        <button  type = "button" className="btn btn-success" onClick= {()=>handleCardButtons(Githuburl)}>Repository</button>
                        <button type="button" className="btn btn-primary" onClick={()=>handleCardButtons(Appurl)}>App</button>
                    </div>
                </ReactCardFlip>
            </div>
           
        );
    }
   
}

export default PortfolioCard;