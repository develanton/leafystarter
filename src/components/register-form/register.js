import React, { Component } from 'react'
import { Button, Form, Segment, Checkbox, Dropdown } from 'semantic-ui-react'
import './register.css'
import countries from './flags.js'
import API from '../../api/api'

let countryOptions = countries;

class RegisterForm extends Component {

  state = {
    firstname: '',
    lastname: '',
    country: '',
    email: '',
    password: '',
    redirect: false
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, country, email, password } = this.state;

    API.registerForm({
      firstname: firstname,
      lastname: lastname,
      username: email,
      country: country,
      password: password,
    }).then(user => {
      console.log(user);
    }).catch(err =>{console.log(err)})
  }

  render() {

    return (
      <div className="ui grid">
        <div className="column">
          <Segment className="register-form" padded="very" inverted color="green">
            <h1 >Register</h1 >
            <h3 style={{ paddingBottom: 10, margin: 3 }}>Go Green!</h3>
            <Form>
              <Form.Field>
                <label>First Name:</label>
                <input placeholder='First Name' name='firstname' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label>Last Name:</label>
                <input placeholder='Last Name' name='lastname' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label>Country:</label>
                <Dropdown placeholder='Select Country' value={this.state.value} name='country' onChange={this.onChange} fluid multiple search selection options={countryOptions} />
              </Form.Field>
              <Form.Field>
                <label>Email:</label>
                <input placeholder='Email' name='email' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input placeholder='Password' name='password' type='password' onChange={this.onChange} />
                <br />
              </Form.Field>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type='submit' onClick={this.formSubmit} >Register</Button>
            </Form>
          </Segment>
        </div>
        <div className="column">
          <Segment className="register-desc" padded="very">
          </Segment>
        </div>
      </div>

    )
  }
}

export default RegisterForm