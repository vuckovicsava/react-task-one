import React, { Component } from 'react';
import Title from './components/Title';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title titleText="test" element="h2" color="red" bgColor="blue"/>
        <Title titleText="test 2" color="red" bgColor="yellow"/>
        <Button onClick={() => console.log('TEST')} btnText="neki tekst" isHref/>
        <Button onClick={() => console.log('TEST 2')} btnText="button"/>
      </div>
    );
  }
}

export default App;
