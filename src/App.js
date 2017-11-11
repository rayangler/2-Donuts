import React, { Component } from 'react';
import {Map} from './components';
import Logo from './logo__1__360.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(newImg) {
    this.setState({
      img: newImg
    });
  }

  render() {
    return (
      <div className="App">
        <img src={Logo} />
        <Map onMarkerClick={this.changeState}/>
      </div>
    );
  }
}

export default App;
