import React, { Component } from 'react'
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import API from '../../api/api'
import './single-project.css'

class SingleCard extends Component {

  state = {
    card: [],
  }

  componentDidMount() {
    this.loadcard();
  }

  loadcard = () => {
    API.getArticles()
      .then((res) => {
        this.setState({ card: res.data })
      })
  }


  render() {
    return (
      <div>
        <Container id='cards'>
          <div className='row'>
            <div className='column ten wide'>
              <Card key={this.state.card._id} data-id={this.state.card._id} className="slide">
              <iframe width="700" height="370" src="https://www.youtube.com/embed/X-HE4Hfa-OY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title='algea'></iframe>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
                  </a>
                </Card.Content>
              </Card>
            </div>
            <div className='column two wide'>

            </div>
            <div className=' column six wide'>
              <Card key={this.state.card._id} data-id={this.state.card._id} className="right">
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                <Card.Content>
                  <Card.Header>{this.state.card.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
          </a>
                </Card.Content>
              </Card>
            </div>
          </div>
        </Container>

        <Container id='description'>
          <div className='row'>
            <div className='column six wide'>
              <div className="ui raised very padded text container segment">
                <h2 className="ui header">Dogs Roles with Humans</h2>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className='column two wide'>

            </div>
            <div className=' column six wide'>
              <Card key={this.state.card._id} data-id={this.state.card._id} className="right">
                <Image src={this.state.card.projectImage} />
                <Card.Content>
                  <Card.Header>{this.state.card.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    22 Friends
          </a>
                </Card.Content>
              </Card>
            </div>
          </div>
        </Container>
      </div>



    )
  }
}

export default SingleCard;

