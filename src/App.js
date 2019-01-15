import React, { Component } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import Paragraph from './components/Paragraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title titleText="test" element="h2" color="red" bgColor="blue"/>
        <Title titleText="test 2" color="red" bgColor="yellow"/>
        <Button onClick={() => console.log('TEST')} btnText="neki tekst" isHref color="red"/>
        <Button onClick={() => console.log('TEST 2')} btnText="button" bgColor="purple" color="white"/>
        <Paragraph text="paragraph text" paragraphSize={40} color="white" bgColor="orange" />
      </div>
    );
  }
}

export default App;
