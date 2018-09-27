import { Item, Container, Dimmer, Loader, Segment } from 'semantic-ui-react'
import React, { Component } from 'react';
import API from "../../api/api";
import './item.css'

var moment = require('moment');


class ArticlesLoad extends Component {

  state = {
    item: [],
    loading: true,
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles() {
    API.getArticles()
      .then((items) => {
        console.log('cool')
        this.setState({
          item: items.data,
          loading: false,
        });
      })
      .catch(err => {
        alert("Error trying to load Todos.");
      });
  }

  render() {
    return (
      <Container id="Todos">
        {this.state.loading ?
          <div className="loader">
            <Segment className="ui-segment load-segment">
              <Dimmer active>
                <Loader size='massive'>Loading</Loader>
              </Dimmer>
            </Segment>
          </div>
          :
          <Item.Group divided >
            {this.state.item.map(item => {
              return (
                <Item key={item.url}>
                  <a href={item.url} target='blank'>
                    <Item.Image size='medium' className='Img' src={item.urlToImage} />
                  </a>
                  <Item.Content className='desc'>
                    <Item.Header as='a' href={item.url} target='blank'>{item.title}</Item.Header>
                    <Item.Description >
                      {item.description}
                    </Item.Description>
                    <div className='metaPlace'>
                      <Item.Meta><b>Author:  {item.author}</b></Item.Meta>
                      <Item.Extra><b>Source: {item.source.name}</b></Item.Extra>
                      <Item.Extra><b>Publication Date: {moment(item.publishedAt).format("MMMM Do YYYY")}</b></Item.Extra>
                      <span className="article-socials">
                        <a href=""><span className="icons"><i class="far fa-bookmark fa-2x"> </i></span></a>
                        <a href=""><span className="icons"><i class="fab fa-twitter fa-2x"> </i></span></a>
                        <a href=""><span className="icons"><i class="fab fa-facebook-square fa-2x"></i></span></a>
                      </span>

                    </div>
                  </Item.Content>
                </Item>
              )
            })
            };
        </Item.Group>
        }
      </Container>
    )
  }
}

export default ArticlesLoad;



