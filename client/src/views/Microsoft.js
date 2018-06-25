import React, {Component} from 'react';
import Slideshow from '../components/Slideshow'

class Microsoft extends Component{
    
    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    componentWillMount(){
        let list = [
           "https://drive.google.com/uc?id=17YtaqRUBe_jbhr3qH-vYcBVouv7KBrgc",
           "https://drive.google.com/uc?id=1SjlbosB2d8MDFThr6G0ciM9HhKcWqY9D",
           "https://drive.google.com/uc?id=1vMrXXdAlo2V9uVyZvG5UfZARzC4y-BCi",
           "https://drive.google.com/uc?id=1WClYGlxLG1Fqs9YX152byFys82vxZyCW",
           "https://drive.google.com/uc?id=15ReP3tYzIuSlBUE9tO7VVIiXTBmwxoW5",
           "https://drive.google.com/uc?id=1zyz1c-LHQvw_EcLC1sx5pu7XVb9BCzjB",
           "https://drive.google.com/uc?id=1nn-N_k9Br9guaDq6nrdrbUwMzidkuR3r",
           "https://drive.google.com/uc?id=1lP9ePsNlsQev_28oh0vltNHbYmK4HEk_",
           "https://drive.google.com/uc?id=1tdHWRLilFu-kI25YsVAH3tnRWpm4p2iB",
           "https://drive.google.com/uc?id=1eyL_Et0ggXOybp5fQ2XcvtfUTNakypPF",
            "https://drive.google.com/uc?id=1RffADjcEY3SqlLGyxUA-wRnoYf-wi8o6",
            "https://drive.google.com/uc?id=1Brt5sIHOBP6i3rK7ZrX_PXfng0kLUIam",
            "https://drive.google.com/uc?id=1yj16ui62qgT9_V1plIaBi662ymmg6cjK",
            "https://drive.google.com/uc?id=1CGHOK-_5V4-6xqq18ATEiilvmUzaxOVe",
            "https://drive.google.com/uc?id=1RJnZrCqR8NGFaZ7-UTNQuTlp7bwUDn21",
            "https://drive.google.com/uc?id=1zZN3MwO-ANPyIpBufLwshM8WkO7CjGiu"
       ]

        this.setState({
            images: list
        })
    }
    
    render() {
        return (<div className="my-5">
            <h1 >West Coast, Best Coast, Microsoft!</h1>
            <br/>
            
            <div className="my-3">
                <Slideshow images={this.state.images}/>
            </div>

            <section className="my-5">
            <h5>
                Seriously, unless you have already committed to another intern/full-time offer in writing, if even merely given the chance to interview onsite just do it to take in the environment!
                This is a pilgrimage a CS student should take if possible.
            </h5>

            <br/>
            <p>I thought I'd just interview gracefully, have fun on Microsoft's dime, and be humored over a weekend onsite. Never did I think I had a chance to land THIS internship! I knew I had to seize this opportunity when I heard I got a chance to intern with
                the company that aspires to "empower every person and every organization on the planet to achieve more". I learned so much this summer and crossed so many things off my bucket list. Web API's don't seem so scary when you know how to manipulate
                the resource endpoint. It has opened my eyes to new possibilities I could not have imagined before in my career journey.
            </p>

            <br/>
            <p>This summer, I worked with the Windows Servicing and Delivery team that own the <a href="https://docs.microsoft.com/en-us/windows/deployment/update/update-compliance-using" target="_blank" rel="noopener noreferrer" ><span className="link-in-body font-weight-bold">Update Compliance (UC)</span></a> solution on the Operations
                Management Suite (OMS) platform to ensure that business organizations are on schedule to get the latest and greatest of Windows 10. During this internship, I worked on integrating Active Directory data into a device telemetry stream. At first,
                I didn't see the connection between the two, but then I was able to grasp identifying devices in organizational context allows for better planning around business deadlines and optimized update deployment schedules. So I wrote a proof-of-concept
                web service to do just that, and the enriched experience as demoed was well received during our all-hands meeting. Secondly, it was really intellectually challenging migrating the UC solution to accomodate a new big database query language by
                documenting best practices in the TypeScript as I examined what new data structures need parsing and how could the new query syntax be constructed. It is amazing to me that effective October 2017 some of the code I wrote will be part of helping
                build on the hard work of the team to provide accurate assessment of update deployement outcomes for the Windows 10 experience.    
            </p>

            <br/>
            <p><em>Update: </em> As a result of Microsoft being on the resume, I was able to sign an offer with <a href="https://www.epic.com/" target="_blank" rel="noopener noreferrer"><span className="link-in-body font-weight-bold">Epic Systems</span></a>.  I can now impact health in ways I could not previously have imagined during medical school.
                Moreoever, Microsoft empowered me to take on the challenge of full-stack development.  Thank you to Maggie Bott, the WSD team (that I interned for including Ranjith, Ramesh, Hari, Canek and Anil who worked most directly with me), and the internship/recruitment coordination team for everything, a truly unforgettable summer.
                And to commemorate the many engineering "pearls" Microsoft has given me, here is lovely song called "Pearls of Joy" by <a href="https://www.amazon.com/Pearls-of-Joy/dp/B000QQ65KC" target="_blank" rel="noopener noreferrer"><span className="link-in-body font-weight-bold">Kevin Kern</span></a>. Just click the <b>PLAY</b> button to enjoy with slideshow.
            </p>
            <br/>
            
            <div align="center" className="my-4">
                <audio src="https://drive.google.com/uc?id=1qU2aETXCQ6A65k6P_frX2d8DTbGzVMC7" controls={true} controlsList="nodownload"></audio>
            </div>

            </section>
        </div>)
    }

}

export default Microsoft;