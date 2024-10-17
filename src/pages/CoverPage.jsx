import React from "react"
import '../assets/css/cover.css';
import {ReactTyped} from "react-typed";
import spaceVideo from '../assets/images/saturnvideo.mp4';
// const messageArray = ['Welcome to my Portfolio','Full Stack Development','Creative Design','Innovative Ideas','Agile Development']
function CoverPage() {
  return (
    <div className='full-page-container d-flex justify-content-center' >
      <video className="background-video" autoPlay muted loop>
        <source src={spaceVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <h1 className="messages"><ReactTyped
     strings ={['<','< Full Stack Development','< Creative Design','< Innovative Ideas','< Agile Development']} typeSpeed ={100}
     loop
     backSpeed ={20}
     cursorChar ="/>"
     showCursor={true}
    /></h1>
      
    
     
      
    </div>
  );
    
}
  
  export default CoverPage;