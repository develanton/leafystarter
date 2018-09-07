import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import './navbar.css'

export default class MenuExampleSizeLarge extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className="primary" size='large'>
        <Menu.Item
          name='Start a project'
          active={activeItem === 'Start a project'}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        />

        <div className="logo">
          <img src='./assets/logo.png' alt='Leafystarter' />
        </div>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Button basic color='green'>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        <hr />
      </Menu>
    )
  }
}