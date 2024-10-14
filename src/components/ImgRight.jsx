import React from 'react';

// Define ImgLeft as a functional component
const ImgRight = ({ img, title, content }) => {
  return (
    <div className="img-right-container float-start">
      <h2>{title}</h2>
      <div className="d-inline-flex justify-content space-between align-items-center">
         
        <p className='fs-4'>{content}</p>
        <img src={img} alt="a picture relating to the title" />   
      </div>
    </div>
  );
};

export default ImgRight;
