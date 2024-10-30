import React from "react";
import {useState} from 'react'
import ReactCardFlip from "react-card-flip";
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
                        <h4>this will display both buttons</h4>
                    </div>
                </ReactCardFlip>
            </div>
           
        );
    }
   
}

export default PortfolioCard;