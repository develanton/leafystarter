import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Right from '../../components/sidebar/right'
import SignIn from '../../components/login/signIn'
import './sign.css'

export class SignUp extends Component {
    render() {
        return (
            <div className="userForm">
                <Navbar />
                <div className="slogan">
                    <div className="row">
                        <div className="ten wide column">
                            <SignIn />
                        </div>
                        <div>
                            <Right className="six wide column rightMobile" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUp


