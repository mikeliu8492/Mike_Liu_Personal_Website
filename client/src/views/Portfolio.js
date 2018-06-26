import React from 'react';
import PortfolioItem from '../components/PortfolioItem'

let items = [
    {
        picture: "https://drive.google.com/uc?id=1Tz6WqkoUjjYVaRD4uMWjk1EDv7H2QWJF",
        title: "ALIQ .NET",
        description: "This was a project I contributed to during the OneWeek Hackathon at Microsoft. It basically is a .NET DLL library that allows developers to write database query logic in their own native development language (in this case C#). I learned a lot about interfaces, lambda functions, and filestream handlers in the course of this project, and even got to put my API endpoint calling skills during the summer to work.",
        alt: ".NET DLL",
        url: "https://github.com/aliq-lang/aliq-dotnet"
    },
    {
        picture: "https://drive.google.com/uc?id=1TGiWcnwoTU0szDfEowDBp70NBSMaOegX",
        title: "Chess",
        description: "This is a chess game I built that can be forked from my github and run in Eclipse. It allows for most standard rules and keeps track of scoring. Allows for undoing the current player's single move, unilateral surrender, or mutual armistice (i.e. neither player scores). Built in Java with Javax.Swing.",
        alt: "Java chess game",
        url: "https://github.com/mikeliu8492/Chess"
    },
    {
        picture: "https://drive.google.com/uc?id=1EHMVLi6xHUR6ySlEukPwDHHKrjF07fiK",
        title: "Minesweeper",
        description: "This is another game coded Java with the Javax.Swing library that can be forked from github and run in Eclipse. It builds upon the classical Windows game by adding grey texts to remind you of constraints when customizing your game and gives scoring depending on difficulty level, time elapsed, etc.",
        alt: "Minesweeper game",
        url: "https://github.com/mikeliu8492/Minesweeper2.0"
    }
]



const Portfolio = () => {
    const portfolioComponents = items.map((project, index) => {
        return <PortfolioItem key = {index} picture={project.picture} title={project.title} description= {project.description} url={project.url} alt={project.alt}/>
    })

    return(
        <div className="mt-5">
            <h1>Some Project Samples</h1>
            <br/>
            {portfolioComponents}
        </div>
    )
}


export default Portfolio;