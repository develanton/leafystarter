import React, { Component } from 'react'
import { Header, Menu, Container } from 'semantic-ui-react'
import './right.css'
import API from '../../api/api'
import { Link } from 'react-router-dom';


export default class Right extends Component {

  state = {
    project: [],
    air: [],
    pollution: '',
    temperature: '',
  }

  componentDidMount = () => {
    this.loadAQI();
  }

  loadAQI = () => {

    /*
    * GET AIR QUALITY FUNCTION  
    */
    API.airQuality()
    .then((response) => {
      console.log(response.data.data)
      this.setState({ air: response.data.data })
      this.setState({ pollution: response.data.data.current.pollution.aqius })
      this.setState({ temperature: response.data.data.current.weather.tp })
    })
    
    API.allProjects()
    .then(res => {
      //  console.log(res)
      this.setState({ project: res.data })
    }).catch(err => { if (err) console.log(err) })

  }

  /*
  * GET PROJECTS FUNCTION
  */

  handleItemClick = (id) => {
    console.log(id);
    API.singleProject(id);
    console.log("after project");
    this.setState({ activeItem: id });
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container>
        <Menu className='ui right fixed small wideSet ' vertical  >
          <Menu.Item id="aqiusDisplay" name='coupons' key={this.state.pollution} active={activeItem === 'coupons'}>
            <h2><strong>Air quality: {this.state.pollution} (Aqius)</strong></h2> <h3>{this.state.temperature} °C</h3>
            <Header as='h4'>{this.state.air.city}, {this.state.air.state}, {this.state.air.country}</Header>
          </Menu.Item>
          {this.state.project.map(projects => {
            return <Menu.Item
              as={Link}
              to={'/project/' + projects._id}
              key={projects._id}
              name={projects._id}
              active={activeItem === projects._id}
              onClick={() => this.handleItemClick(projects._id)}>
              <Header as='h4'>{projects.title}</Header>
              <p><b>{projects.location}</b></p>
            </Menu.Item>

          })
          }

        </Menu>
      </Container>
    )
  }
}
