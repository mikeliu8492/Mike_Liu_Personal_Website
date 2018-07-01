import React, {Component} from 'react';
import './Slideshow.css'

import Axios from 'axios'

import firebase from 'firebase'

let HOST = ""
if (process.env.NODE_ENV === 'production'){
    HOST = "https://mikeliu8492.herokuapp.com"
}
else {
    HOST = "http://localhost:5000"
}

class Slideshow extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            imageList: []
        }
    }
    
    componentWillMount() {
        firebase.auth().signInWithEmailAndPassword(process.env.REACT_APP_USERNAME, process.env.REACT_APP_PASSWORD)
        .then(()=> {
            return firebase.auth().currentUser.getIdToken(false)
        })
        .then(token => {
            const {imageUrl} = this.props
            const URL = `${HOST}/api/gallery/${imageUrl}`
            Axios.defaults.headers.common['Authorization'] =  'Bearer ' + token
            const headers = {
                withCredentials: true,
                headers: { Authorization: 'Bearer ' + token }
            }
            return Axios.get(URL, headers)
        })
        .then(response => {
            const gallery = response.data.picture_urls
            this.setState({imageList: gallery})
        })
        .catch((err) => {
            console.log(err.toString())
        })
    }

    renderSlides() {
        return(
            <div className="carousel-inner">
                {
                    this.state.imageList.map((galleryMember, index) => {
                        if(index === 0) {
                            return(
                                <div key={galleryMember.image} className="carousel-item active">
                                    <img className="d-block w-100" src={galleryMember.image} alt={galleryMember.alt_text}></img>
                                </div>
                            )
                        }
                        return(
                            <div key={galleryMember.image} className="carousel-item">
                                <img className="d-block w-100" src={galleryMember.image} alt={galleryMember.alt_text}></img>
                            </div>
                        )

                    })
                }
            </div>
        )
    }

    renderCarousel() {
        if (this.state.imageList.length === 0) {
            return (
                <div className="text-center">
                    <h4>Slideshow unavailable.</h4>
                </div>
            ) 
        }

        return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="3000">
            {   
                this.renderSlides()
            }
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
      )
    }
    
    render() {
        return (
            <div className="slideshow-container" style={{margin: "0 auto"}}>
                {this.renderCarousel()}
            </div>
        )
    }
}

export default Slideshow;