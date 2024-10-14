import React from 'react';

// Define SoftDev as a functional component
const SoftDev = ({ title, content }) => {
    return (
        <div className="soft-dev-container">
            <h3 className='text-warning'>{title}</h3>
            <div className="d-inline-flex justify-content space-between align-items-center ">
                <div className="icons-container">
                    
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/html5/html5-original-wordmark.svg" alt="HTML" width="40" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/css3/css3-original-wordmark.svg" alt="CSS" width="40" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/javascript/javascript-plain.svg" alt="JavaScript" width="30" height="40" />
                    
                    
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/nodejs/nodejs-original-wordmark.svg" alt="Node" width="50" height="50" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDB" width="50" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/postgresql/postgresql-plain-wordmark.svg" alt="PostgreSQL" width="40" height="40" />
                  
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/express/express-original.svg" alt="Express" width="40" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/graphql/graphql-plain-wordmark.svg" alt="GraphQL" width="40" height="40" />
                  
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" width="40" height="40" />
                        <img src="https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/jquery/jquery-original-wordmark.svg" alt="jQuery" width="40" height="40" />
                    
                </div>
                <p className=' text-start mx-4'>{content}</p>
            </div>
        </div>
    );
};

export default SoftDev;
