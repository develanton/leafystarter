import React, { Component } from 'react'
import { Card, Icon, Image, Container, Button } from 'semantic-ui-react'
import NumberFormat from 'react-number-format';
import API from '../../api/api'
import './single-project.css'
import Modal from './modal/fund-modal'

class SingleCard extends Component {



  state = {
    card: [],
  }

  componentDidMount() {
    this.loadcard();
  }

  loadcard = () => {
    API.singleProject(this.props.id)
      .then((res) => {
        this.setState({ card: res.data })
      })
  }


  render() {
  console.log(this.props.id);
    return (
      <div>
        <Container id='cards'>
          <div className='row'>
            <div className='column ten wide'>
              <Card key={this.state.card._id} data-id={this.state.card._id} className="slide">
              <iframe width="700" height="370" src="https://www.youtube.com/embed/X-HE4Hfa-OY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title='algea'></iframe>
                <Card.Content extra>
                 
                </Card.Content>
              </Card>
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
              </Card>
            </div>
          </div>
        </Container>

        <Container id='description'>
          <div className='row'>
            <div className='column six wide'>
              <div className="ui raised very padded text container segment">
                <h2 className="ui header">{this.state.card.title}</h2>
                <p>{this.state.card.about}</p>
                <p></p>
              </div>
            </div>
            <div className='column one wide'>

            </div>
            <div className=' column six wide'>
              <Card key={this.state.card._id} data-id={this.state.card._id} className="right">
                <Card.Content>
                  <Card.Header></Card.Header>
                  <Card.Meta>
                    <span className='date'>{this.state.card.duration}</span>
                  </Card.Meta>
                  <Card.Description>
                  <NumberFormat className='fund-amount'  placeHolder='Funding Amount' thousandSeparator={true} prefix={'$'} />
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button positive>Support</Button>
                <Modal />
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

