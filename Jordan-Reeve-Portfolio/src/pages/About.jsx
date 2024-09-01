import React from 'react';
import '../assets/css/aboutme.css';
import spaceVideo from '../assets/images/spacevideo.mp4';

const AboutMe = () => {
  return (
    <div className="container-xxl">
      <video className="background-video" autoPlay muted loop>
        <source src={spaceVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="content text-warning">
        <h1>About Page</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
