import React, { Component } from 'react'
import { Button, Form, Segment, Step, Divider } from 'semantic-ui-react'
import './signin.css'
import API from '../../api/api'

class SignIn extends Component {

  state = {
    username:'',
    password:''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginSumbit = () => {
    API.submitLogin({
        username:this.state.username,
        password: this.state.password
    }).then(sign =>{
      console.log(sign);
    }).catch(err =>{console.log(err)})

  }

  googleRoute = () => {
   API.logGoogle().then(res =>{
     console.log(res)
    }).catch(err =>{console.log(err)});
  }


  render() {
    return (
      <div className="ui grid">
        <div className="column">
          <Segment className="login-form" padded="very" inverted color="green">
            <h1 >Sign in</h1 >
            <h3 style={{ paddingBottom: 10, margin: 3 }}>Go Green!</h3>
            <Form>
              <Form.Field>
                <label>Email:</label>
                <input placeholder='Email' name='username' onChange={this.onChange} />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input placeholder='Password' type='password' name='password' onChange={this.onChange} />
                <br />
              </Form.Field>
              <Form.Field>
                <a href="/" style={{ marginTop: 30 }}>Forgot your Password?</a>
              </Form.Field>
              <Button type='submit' onClick={this.loginSumbit}>Submit</Button>
            </Form>

            <Divider horizontal>Or</Divider>
            <Button onClick={this.googleRoute} style={{ marginRight: 35 }}><i className="fab fa-google fa-lg"></i>  <b className="login-btn">Log in with Google</b></Button>
            <Button><i className="fab fa-facebook fa-lg"></i>  <b className="login-btn">Log in with facebook</b></Button>

          </Segment>
        </div>
        <div className="column">
          <img id="login-tree" alt="Tree" src="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/cc_iStock-478639870_16x9.jpg?itok=1-jMc4Xv" />
        </div>
        <div id="steps">
          <Step.Group ordered size='big'>
            <Step active>
              <Step.Content>
                <Step.Title>Register</Step.Title>
                <Step.Description>Keep track of new projects</Step.Description>
              </Step.Content>
            </Step>

            <Step active>
              <Step.Content>
                <Step.Title>Choose a project</Step.Title>
                <Step.Description>Find the one that appeals to you</Step.Description>
              </Step.Content>
            </Step>

            <Step active>
              <Step.Content>
                <Step.Title>Fund a project</Step.Title>
                <Step.Description>Share with your friends and family</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
        </div>
      </div>

    )
  }
}

export default SignIn