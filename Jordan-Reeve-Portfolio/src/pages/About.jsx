import React from 'react';
import '../assets/css/aboutme.css';
import spaceVideo from '../assets/images/spacevideo.mp4';
import ImgLeft from '../components/imgLeft';
import ImgRight from '../components/ImgRight';
const sampleText = "Nunc pharetra finibus est at efficitur. Praesent sed congue diam.Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.";
import familyimg from '../assets/images/familypicture.jpg';

import sampleImg from '../assets/images/Profile.png'
const AboutMe = () => {
  return (
    <div className='full-page-container' >
      <video className="background-video" autoPlay muted loop>
        <source src={spaceVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="content text-warning">
        <h1>About Me</h1>
        <ImgLeft img={familyimg} title="Father and Husband" content={sampleText} key={1}/>
        <ImgRight img={sampleImg} title="A Software Developer" content ={sampleText} key= {2} id="mid"/>
        <ImgLeft img={sampleImg} title="Marine Corps Veteran" content={sampleText} key={3}/>
      </div>
    </div>
  );
};

export default AboutMe;
