import React from 'react'

export default function Title({ element, titleText, color, bgColor }) {
  const styles = { color, backgroundColor: bgColor };

  switch(element) {
    case 'h1':
      return <h1 style={styles}>{titleText}</h1>;
    case 'h2':
      return <h2 style={styles}>{titleText}</h2>;
    case 'h3':
      return <h3 style={styles}>{titleText}</h3>;
    case 'h4':
      return <h4 style={styles}>{titleText}</h4>;
    case 'h5':
      return <h5 style={styles}>{titleText}</h5>;
    case 'h6':
      return <h6 style={styles}>{titleText}</h6>;
    default:
      return <h1 style={styles}>{titleText}</h1>;
  }
}

