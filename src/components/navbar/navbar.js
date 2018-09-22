import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="primary fixed" size='large' >
        <Menu.Item
          as={Link}
          to='/blog'
          name='Green News'
          active={activeItem === 'Green News'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/projects'
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to='/start'
          name='Start a project'
          active={activeItem === 'Start a project'}
          onClick={this.handleItemClick}
        />

        <div className="logo">
          <Link to='/'>
            <img id="imgLogo" src={require('../../assets/logo.png')} alt='Leafystarter' />
          </Link>
        </div>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button.Group>
              <Button as={Link} to={'/register'}>Register</Button>
              <Button.Or />
              <Button as={Link} to={'/sign'}positive>Sign In</Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}