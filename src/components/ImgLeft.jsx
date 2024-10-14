import React from 'react';

// Define ImgLeft as a functional component
const ImgLeft = ({ img, title, content }) => {
  return (
    <div className="img-left-container  float-start">
      <h2>{title}</h2>
      <div className="d-inline-flex justify-content space-between align-items-center ">
      <img src={img} alt="a picture relating to the title" />       
        <p className='fs-4'>{content}</p>
      </div>
    </div>
  );
};

export default ImgLeft;
