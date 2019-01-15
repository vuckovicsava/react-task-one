import React, { Component } from 'react';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title titleText="test" element="h2" color="red" bgColor="blue"/>
        <Title titleText="test 2" color="red" bgColor="yellow"/>
      </div>
    );
  }
}

export default App;
