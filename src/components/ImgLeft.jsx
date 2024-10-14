import React from 'react';

// Define ImgLeft as a functional component
const ImgLeft = ({ img, title, content }) => {
  return (
    <div className="img-left-container  float-start">
      <h3 className='text-warning'>{title}</h3>
      <div className="d-inline-flex justify-content space-between align-items-center ">
      <img src={img} alt="a picture relating to the title" />       
        <p className='text-start mx-4'>{content}</p>
      </div>
    </div>
  );
};

export default ImgLeft;
