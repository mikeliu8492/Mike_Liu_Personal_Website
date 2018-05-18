import React from 'react';
import {Link} from 'react-router-dom'

import IMO from '../images/work/IMO.png'
import microsoft from '../images/work/microsoft.png'
import epic from '../images/work/epic.png'

const companyArray = [
    {picture: epic, name: "Epic Systems (stay tune updates coming up!)", alternateText: "Epic Systems", linkUrl: "/work"},
    {picture: microsoft, name: "Microsoft",  alternateText: "Microsoft", linkUrl: "/microsoft"},
    {picture: IMO, name: "Intelligent Medical Objects", alternateText: "Intelligent Medical Objects", linkUrl: "/imo"},
]

const CompanyElement = ({picture, name, alternateText, linkUrl}) => {
    return (
        <div>
            <div style={{float: "left", width: "20%"}}>
                <Link to = {linkUrl}><img src={picture} alt={alternateText} style={{maxHeight: "100px"}}></img></Link>
            </div>
            <div style={{float: "right", alignItems: "center", width:"80%"}}>
                <div style={{textAlign: "left", position: "relative", top: "30px", margin: "10px", verticalAlign: "center"}}>
                <Link to = {linkUrl}> {name}</Link>
                </div>
            </div>

            <br style={{clear:"both"}}/>
            <div style={{minHeight: "30px"}}></div>
        </div>)
}

const WorkExperience = () => {
    const companies = companyArray.map((company) => {
        return <CompanyElement picture={company.picture} name={company.name} alternateText={company.alternateText} linkUrl={company.linkUrl}/>
    })

    return (<div>
        <h1>My Career Journey Thusfar</h1>
        <br/>
        <br/>
        <h3>Places I have been</h3>
        <br/>
        
        
        <section style={{display: "block"}}>
            <ul>
                {companies}
            </ul>
        </section>

    </div>)
}

export default WorkExperience;