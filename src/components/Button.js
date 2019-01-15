import React from 'react'

export default function Button(props) {
  const { onClick, btnText, color, bgColor, isHref } = props;
  const styles = { color, backgroundColor: bgColor };

  return (isHref) 
    ? <a href="#" onClick={onClick} style={styles}>{btnText}</a>
    : <button onClick={onClick} style={styles}>{btnText}</button>;
}
