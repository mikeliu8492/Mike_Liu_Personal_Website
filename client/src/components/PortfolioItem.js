import React from 'react';
import './PortfolioItem.css'

const PortfolioItem = ({picture, title, description, alt}) => {
    return (
        <div className="fl w-100">
                <div className="project-picture">
                    <img src={picture} alt="project_picture"></img>
                </div>
            
                <div className="project-description">
                    <div>
                        <h3 style={{textAlign: "center"}}>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
        </div>
    )
}
export default PortfolioItem