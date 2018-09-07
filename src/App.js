import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import Right from './components/right';
import Item from './components/item/item';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="ten wide column">
            <Item  />
          </div>
          <div>
            <Right className="column" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
