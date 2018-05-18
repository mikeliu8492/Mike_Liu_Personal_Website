import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import interview from '../images/home/interview.jpg';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="flex items-center">
                    <div id = "portrait" className = "w-45">
                        <img src={interview} alt="my portrait"></img>
                    </div>

                    <div id = "quote" className = "w-55">
                        <blockquote>
                            <p><i><b>“You can't always get what you want, but if you try sometimes, you might find, you get what you need.”</b></i></p>
                            <p>― Mick Jagger</p>
                        </blockquote>
                    </div>
                </div>

                <article>
                    <h3> About Me </h3>
                    <p>
                        HI! My name is Mike Liu. <br/><br/>
                        I'm a graduate of the <a href="http://www.cs.uiuc.edu" target="_blank" rel="noopener noreferrer"> <b>Department of Computer Science</b> </a> at the
                        <a href="http://engineering.illinois.edu/" target="_blank" rel="noopener noreferrer"> <b>University of Illinois, Urbana-Champaign College of Engineering</b></a>. I was born in Nanchang, China, but grew up in Los Angeles for most of my life. I came to Computer Science through a very roundabout way. When I was younger, I always
                        liked to play video games and solve puzzles (and I still remember the day my dad took my Legos away because I was too old for them). Unlike people such as my cousin James, I wasn't really into robotics or dissecting a computer to see how it works.
                        In fact, prior to reorienting into CS I wanted to be a doctor and actually went to medical school for almost 3 years. In the end, I chose to leave because I couldn't stand the blood and the stress. Plus there was no such thing as version control
                        in medicine so that wasn't the field for me. But now I approach the field of Comptuer Science with positivity because I see how it suits my need to find patterns and meaning in solving problems. This comes from my musically inclined nature (I have
                        played piano for years), and I am glad I have found an outlet for a viable career. While I am open to learning many new technologies, I am particuarly interested in databases, data analytics, and styling user-friendly data visualization. I have
                        demonstrated results and growth in these areas from the internships I have experienced, especially now that I have developed proficiency in technological tools such SQL and C# amongst many others. Therefore, I hope to advance even further along
                        this path of lifelong learning.
                    </p>
                </article>
                
                <br/>
                <article>
                    <h3> Recreational Interests </h3>
                    <p>
                        As stated above, I am a very musically inclined person who has played piano since I was eight. When I was in medical school, I regularly played for a talent show we had called "Variety Fest" and also helped raise money for a student community service
                        group called "Physicans for the Arts" by playing at Alumni Association events. I also like singing in my spare time so much that it has earned me the moniker "Karaoke Master" at one of my internships. I am a huge fan of Pandora where I regularly
                        listen to "Classical for Studying" that puts together some very good fusions of contemporary pop songs with a classical twist. I have a rather eclectic musical taste that isn't based on genre or artist. It is based on how said music makes me feel
                        or what context it puts me in (e.g. does it make me laugh or become contemplative). In other musical news, I swing dance and am a member of the Illini Swing Society. I love to cook as well and occasionally share with friends. Also, I am a huge
                        shutterbug.
                    </p>
                </article>
                
                <br/>
                <section>
                <h3> Some of My Favorite Music </h3>
                    <ul>
                        <li><a href="https://www.pandora.com/music/classical/classical-for-studying" target="_blank" rel="noopener noreferrer">Pandora Classical for Studying</a></li>
                        <li><a href="https://www.youtube.com/watch?v=AgOsUsQd2eg&index=1&list=PLCVM8OjVikTbbWIyHco3mG3L_wiMfE327" target="_blank" rel="noopener noreferrer">Dallas String Quartet</a></li>
                        <li><a href="https://www.youtube.com/watch?v=4qOGVj_s3Bo&list=PLYb55hR6Ug7f2VbTdyUE8lrX_n_BaX52F&index=1" target="_blank" rel="noopener noreferrer">Emile Pandolfi</a></li>
                        <li><a href="https://www.youtube.com/watch?v=PiBBgCtfPyI" target="_blank" rel="noopener noreferrer">Brain Crain</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NN-Jfqg5Zd8&index=1&list=PLwu-smR1Fpb1tEM5hRgakp1GDOLeMSMoV" target="_blank" rel="noopener noreferrer">Philip Wesley</a></li>
                    </ul>
                </section>

                <h3>Food Pictures!</h3>
                <p>
                    <Link to="/food">An artistic slideshow of good food pictures I have taken.</Link>
                </p>
            </div>
        )
    }
}

export default Home;