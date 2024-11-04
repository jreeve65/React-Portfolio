import React from "react";
import '../assets/css/contact.css'
import githubLogo from '../assets/images/Githublogowoodstock.png'
import linkedin from'../assets/images/linkedinlogo.png'
export default function Contact() {
  return (
    <div className="container-fluid bg-dark text-warning d-flex justify-content-center align-items-center" >
      <div className="text-center">
      <h1>Thanks for stoping by!</h1>
      <h3>Check me out or reach me @</h3>
        <div className="icons-box border-top border-warning">
     
     <img className="img" src={githubLogo} alt="git hub logo" onClick={()=>{window.open('https://github.com/jreeve65')}}/>
     <img className="img" src={linkedin} alt="git hub logo" onClick={()=>{window.open('https://www.linkedin.com/in/jordan-reeve-86277a272/')}}/>
     
     </div>
     <h3>Email: Jordan65reeve@yahoo.com</h3>
     <h4>Resume available upon request</h4>
     </div>
     
    </div>
  );
};
