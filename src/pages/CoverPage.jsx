import {useEffect} from "react"
import{useNavigate} from "react-router-dom"
import React from "react"
import '../assets/css/cover.css';
import {ReactTyped} from "react-typed";
import spaceVideo from '../assets/images/saturnvideo.mp4';
// const messageArray = ['Welcome to my Portfolio','Full Stack Development','Creative Design','Innovative Ideas','Agile Development']
function CoverPage() {
 const navigate = useNavigate();
 useEffect(()=>{
  const timer =setTimeout(()=>{
    navigate('/About');
  },20000);
  return()=>clearTimeout(timer);
 },[navigate]);
  return (
    <div className='full-page-container d-flex justify-content-center' >
      <video className="background-video" autoPlay muted loop>
        <source src={spaceVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <h1 className="messages"><ReactTyped
     strings ={['<','< Welcome','< Full Stack Development','< Creative Design','< Innovative Ideas','< Agile Development']} typeSpeed ={120}
     loop
     backSpeed ={20}
     cursorChar ="/>"
     showCursor={true}
    /></h1>
      
    
     
      
    </div>
  );
    
}
  
  export default CoverPage;