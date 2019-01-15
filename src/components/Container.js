import React, { Component } from 'react'
import Title from './Title';
import Paragraph from './Paragraph';
import Button from './Button';

export default class Container extends Component {
 
  state = {
    showTitle: false,
    paragraphColor: 'black'
  }

  toggleTitle = () => {
    this.setState(state => ({ showTitle: !state.showTitle }));
  }

  setParagraphColor = (color) => {
    this.setState({ paragraphColor: color })
  }

  renderColorButtons = () => {
    const colors = ['blue', 'purple', 'green'];
    return colors.map(color => (
      <Button 
        btnText={color} 
        bgColor={color}
        color="white"
        onClick={() => this.setParagraphColor(color)}
        key={color}
        isHref
      />
    ));
  }
  
  renderAllTitles = () => {
    const titlesInfo = [
      { elem: 'h1', text: 'Title One', color: 'white', bgColor: 'red' },
      { elem: 'h2', text: 'Title Two', color: 'white', bgColor: 'green' },
      { elem: 'h3', text: 'Title Three', color: 'white', bgColor: 'blue' },
      { elem: 'h4', text: 'Title Four', color: 'black', bgColor: 'pink' },
      { elem: 'h5', text: 'Title Five', color: 'black', bgColor: 'cyan' },
      { elem: 'h6', text: 'Title Six', color: 'white', bgColor: 'brown' }
    ];
    
    return titlesInfo.map(({ elem, text, color, bgColor }) => (
      <Title
        element={elem}
        titleText={text}
        color={color}
        bgColor={bgColor}
        key={elem}
      />
    ))
  }

  renderButtons = () => {
    const buttons = [
      { bgColor: '#f44336', color: 'white' },
      { bgColor: '#e91e63', color: 'white' },
      { bgColor: '#9c27b0', color: 'white' },
      { bgColor: '#673ab7', color: 'white' },
      { bgColor: '#3f51b5', color: 'white' },
      { bgColor: '#2196f3', color: 'black' },
      { bgColor: '#03A9F4', color: 'black' },
      { bgColor: '#00BCD4', color: 'black' },
      { bgColor: '#009688', color: 'white' },
      { bgColor: '#4CAF50', color: 'black' },
      { bgColor: '#8BC34A', color: 'black' },
      { bgColor: '#CDDC39', color: 'black' },
      { bgColor: '#FFEB3B', color: 'black' },
      { bgColor: '#FFC107', color: 'black' },
      { bgColor: '#FF9800', color: 'black' },
      { bgColor: '#FF5722', color: 'black' },
      { bgColor: '#795548', color: 'white' },
      { bgColor: '#9E9E9E', color: 'black' },
      { bgColor: '#607D8B', color: 'white' },
      { bgColor: '#000000', color: 'white' },
      { bgColor: '#ffffff', color: 'black' }
    ];

    return buttons.map(({ color, bgColor }, i) => (
      <Button 
        btnText={`Button ${i+1}`} 
        bgColor={bgColor}
        color={color}
        onClick={() => this.setParagraphColor(bgColor)}
        key={bgColor}
      />
    ))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleTitle} btnText="Toggle Title"/>
        { this.state.showTitle && <Title titleText="Title"/> }
        <Paragraph 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          paragraphSize={20}
          color={this.state.paragraphColor}
        />
        <hr/>
        { this.renderColorButtons() }
        <hr/>
        { this.renderAllTitles() }
        <hr/>
        { this.renderButtons() }
      </div>
    )
  }
}
