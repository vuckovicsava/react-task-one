import React from 'react'

export default function Paragraph(props) {
  const { text, paragraphSize, color, bgColor } = props;

  return (
    <p style={{ fontSize: paragraphSize, backgroundColor: bgColor, color }}>
      {text}
    </p>
  );
}
