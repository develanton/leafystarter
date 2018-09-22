import React, { Component } from 'react'
import { Card, Image, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import API from '../../api/api'
import './projects.css'
//require('dotenv').config


class ProjectCards extends Component {

  state = {
    card: [],
  }

  componentDidMount() {
    this.loadCards();
  }

  loadCards = () => {
    API.allProjects()
      .then((res) => {
        console.log('All Cards:' + res);
        this.setState({ card: res.data })
      })
  }


  render() {
    return (
      <Container id='cards'>
        <Card.Group itemsPerRow={3}>
          {this.state.card.map(cards => {
            console.log(cards)
            return (
              <Card
                as={Link}
                to={'/project/' + cards._id}
                key={cards._id}
                data-id={cards._id}
                className="slide-right raised" >
                <Image src={ cards.projectImage} />
                <Card.Content>
                  <Card.Header>{cards.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button positive>Support</Button>
                  <span className="right">
                    <span className="icons"><i class="far fa-bookmark fa-2x"> </i></span>
                    <span className="icons"><i class="fab fa-twitter fa-2x"> </i></span>
                    <span className="icons"><i class="fab fa-facebook-square fa-2x"></i></span>
                  </span>
                </Card.Content>
              </Card>
            )
          })
          }
        </Card.Group>
      </Container>
    )
  }
}

export default ProjectCards;