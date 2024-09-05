import React from "react"
import {useState}from"react";
import "../assets/css/contact.css"
import { validateEmail } from "../utils/helpers";
function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const[message,setMessage]= useState('')
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'fullName') {
        setFullName(inputValue);
      } else{
        setMessage(inputValue);
      }
      
    };
  
    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();
  
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email) || !fullName) {
        setErrorMessage('Email is invalid or name has not been entered');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
     
      
      alert(`Thank You for your submitting your contact info ${fullName} I will be reaching out to you at ${email} as soon as I can`);
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setFullName('');
      setMessage('');
      setEmail('');
    }
  
    return (
      <div className="container-xxl">
        <h2>Thank you for checking out my portfolio please fill out this form if you would like to contact me</h2>
        <form className="form bg-light"id="myform" onSubmit={handleFormSubmit}>
        
          <label> Full Name</label>
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="ex. John Doe"
          />
              <label>Email</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="somedude@someEmail.com"
          />
          <label>Subject</label>
          <input 
          value={message}
          onChange ={handleInputChange}
          placeholder= "How can I help"
          type="text" />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
}
  
  export default Form;