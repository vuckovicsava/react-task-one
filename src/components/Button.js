import React from 'react'

export default function Button({ onClick, btnText, color, bgColor, isHref }) {
  const styles = { color, backgroundColor: bgColor };

  return (isHref) 
    ? <a onClick={onClick} style={styles}>{btnText}</a>
    : <button onClick={onClick} style={styles}>{btnText}</button>;
}
