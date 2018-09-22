import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import Right from '../../components/sidebar/right'
import RegisterForm from '../../components/register-form/register.js'
import './sign.css'

export class Register extends Component {
    render() {
        return (
            <div className="userForm">
                <Navbar />
                <div className="slogan">
                    <div className="row">
                        <div className="ten wide column">
                            <RegisterForm />
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

export default Register


