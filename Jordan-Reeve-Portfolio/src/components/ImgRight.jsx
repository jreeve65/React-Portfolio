import React from 'react';

// Define ImgLeft as a functional component
const ImgRight = ({ img, title, content }) => {
  return (
    <div className="img-right-container text-warning float-end">
      <h2>{title}</h2>
      <div className="d-inline-flex justify-content space-between align-items-center bg-danger">
         
        <p>{content}</p>
        <img src={img} alt="a picture relating to the title" />   
      </div>
    </div>
  );
};

export default ImgRight;
