import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Right from '../../components/sidebar/right'
import { Segment } from 'semantic-ui-react'
import './home.css'
import Carousel from '../../components/carousel/carousel'

export class Blog extends Component {

    render() {

        let size = "massive";
        return (
            <div>
                <div className="homes">
                    <Navbar />
                    <Segment className="raised main-text" key={size} size={size} inverted color='green' textAlign='center'>
                        <p className="heading-text">The future will either be green or not at all.</p>
                        <a className="quote-link right"  href="https://www.wikiwand.com/en/Bob_Brown" target="blank">Bob Brown</a>
                    </Segment>
                    <span className="location"><Carousel /></span>
                    <div className="row">
                        <div className="sixteen wide column ">

                        </div>
                        <div>
                            <Right className="column rightMobile" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog


