import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import UserForm from '../../components/form/form'
import Right from '../../components/sidebar/right'
import './start.css'

export class Start extends Component {
    render() {
        return (
            <div className="start">
                <Navbar />
                <div className="row">
                    <div className="ten wide column auto raised centralContainer">
                        <UserForm />
                    </div>
                    <div>
                        <Right className="column auto raised rightMobile" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Start
