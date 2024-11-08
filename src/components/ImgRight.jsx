import React from 'react';

// Define ImgLeft as a functional component
const ImgRight = ({ img, title, content }) => {
  return (
    <div className="img-right-container float-start">
      <h3 className='text-warning'>{title}</h3>
      <div className="d-inline-flex justify-content space-between align-items-center">
         
        <p className=' text-start mx-4'>{content}</p>
        <img src={img} alt="a picture relating to the title" />   
      </div>
    </div>
  );
};

export default ImgRight;
