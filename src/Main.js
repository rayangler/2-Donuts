import React from 'react';

class Main extends React.Component {
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
        <h1> 2 DONUTS </h1>
        <Map onMarkerClick={this.changeState}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
