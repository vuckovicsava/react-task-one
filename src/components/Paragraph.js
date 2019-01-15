import React from 'react'

export default function Paragraph({ text, paragraphSize, color, bgColor }) {
  return (
    <p style={{ fontSize: paragraphSize, backgroundColor: bgColor, color }}>
      {text}
    </p>
  );
}
