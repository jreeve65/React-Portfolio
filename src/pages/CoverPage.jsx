import React from "react"
import spaceVideo from '../assets/images/spacevideo.mp4';
function CoverPage() {
  return (
    <div className='full-page-container' >
      <video className="background-video" autoPlay muted loop>
        <source src={spaceVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
    
}
  
  export default CoverPage;