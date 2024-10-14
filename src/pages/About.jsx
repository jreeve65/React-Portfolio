import React from 'react';
import '../assets/css/aboutme.css';
import ImgLeft from '../components/ImgLeft';
import ImgRight from '../components/ImgRight';
import SoftDev from '../components/SoftDev';
const fAHText = "Father to two wonderful children and happily married.  I enjoy spending time with my wife and children.  My family and I enjoy playing games, watching movies, Cooking, Sight seeing and good company.  When I have a minute to my self I enjoy exploring new ideas, Marksmenship, Lifting weights, and playing guitar.";
const sdevText ="As a software developer I am proficient in these technologies and languages: JavaScript, CSS, HTML, React, MongoDB, Sequelize, Handlebars, RESTFUL Api Development and MERN. Im always on the look out for learning new techniques and skills and enjoy sharing what I know as well.";
const veteranText ="I am a Marine who served from the years 2009 to 2016. I operated the Light Armored Vehicle. While serving my country I obtained my Bachelor of Science in Criminal Justice.  I am very thankful that I got the opportunity to serve my country and thankful to others who have done the same."
import familyimg from '../assets/images/familypicture.jpg';
import profilePhoto from'../assets/images/professional.png'
import marineImg from '../assets/images/Profile.png'
const AboutMe = () => {
  return (
    <div className='full-page-container bg-dark About-Me' >
      
      <div className="content text-warning">
      <h1>About Me</h1>
        <div className='d-flex flex-column justify-content-evenly align-items-center' id='about-me-content'>
        <SoftDev title ="A Software Developer" content ={sdevText} key ={2}/>
        <ImgRight img={familyimg} title="Father and Husband" content={fAHText} key={1}/>
        {/* <ImgRight img={profilePhoto} title="A Software Developer" content ={sdevText} key= {2} id="mid"/> */}
        <ImgLeft img={marineImg} title="Marine Corps Veteran" content={veteranText} key={3}/>
        </div>
        
      </div>
    </div>
  );
};

export default AboutMe;
