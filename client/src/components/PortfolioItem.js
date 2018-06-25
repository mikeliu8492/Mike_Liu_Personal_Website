import React from 'react';
import './PortfolioItem.css'

const PortfolioItem = ({picture, title, description, alt, url}) => {
    return (
        <div className="row my-3 portfolio-row">
                <div className="col-5 project-picture">
                    <a href={url}>
                        <img src={picture} alt={alt}></img>
                    </a>
                    
                </div>
            
                <div className="col-7 px-5 project-desciption">
                    <div>
                        <div align="center">
                            <h3>{title}</h3>
                        </div>
                        
                        <p>{description}</p>
                    </div>
                </div>
        </div>
    )
}
export default PortfolioItem



/*

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
 */