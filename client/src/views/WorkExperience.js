import React from 'react';
import {Link} from 'react-router-dom'

const companyArray = [
    {picture: "https://drive.google.com/uc?id=1TwegjwZzM-UiB7BPXHYoXo-kRpo65C8B", name: "Epic Systems (incoming developer, stay tuned for updates coming up soon!)", alternateText: "Epic Systems", linkUrl: "/work"},
    {picture: "https://drive.google.com/uc?id=1j_PWu67Hhp7l-3paWKw54rh0UQvkoFeZ", name: "Microsoft",  alternateText: "Microsoft", linkUrl: "/microsoft"},
    {picture: "https://drive.google.com/uc?id=1nGu96qxy6bzcpC8uDvTRrHGy5FaTxOIS", name: "Intelligent Medical Objects", alternateText: "Intelligent Medical Objects", linkUrl: "/imo"},
]

const CompanyElement = ({picture, name, alternateText, linkUrl}) => {
    return (
        <div className="row my-5">
            <div className="col-2 align-self-center">
                <Link to = {linkUrl}>
                    <img src={picture} alt={alternateText} style={{maxHeight: "100px"}}></img>
                </Link>
            </div>
            <div className="col-10 align-self-center">
                <Link to = {linkUrl}> 
                    <span className="text-dark"><b>{name}</b></span>
                </Link>
            </div>
        </div>
    )
}

const WorkExperience = () => {
    const companies = companyArray.map((company, index) => {
        return <CompanyElement key={index} picture={company.picture} name={company.name} alternateText={company.alternateText} linkUrl={company.linkUrl}/>
    })

    return (
        <div className="my-5">
            <h1>My Career Journey Thusfar</h1>
            <br/><br/>
            <h3>Internships and Full-time Opportunities Experienced</h3>
            <br/>
            
            
            <section>
                <ul>
                    {companies}
                </ul>
            </section>
            <br/>
        </div>
    )
}

export default WorkExperience;