import React, { useState, useEffect } from 'react';

// Function to generate random styles
const getRandomStyle = (index) => {
  const colors = ['#FFF6E9'];
  const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana', 'Tahoma'];
  const fontWeights = ['normal', 'bold', 'bolder', 'lighter'];
  const fontStyles = ['normal', 'italic', 'oblique'];
  const textDecorations = ['none', 'underline', 'line-through'];

  return {
    color: colors[index % colors.length],
    fontFamily: fonts[index % fonts.length],
    fontWeight: fontWeights[index % fontWeights.length],
    fontStyle: fontStyles[index % fontStyles.length],
    textDecoration: textDecorations[index % textDecorations.length],
    transform: `rotate(${Math.random() * 360}deg)`,
  };
};

const MoreHelp = () => {
  const [helpCount, setHelpCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHelpCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={moreHelpStyles.container}>
      {[...Array(helpCount)].map((_, index) => (
        <div
          key={index}
          style={{
            ...moreHelpStyles.text,
            ...getRandomStyle(index),
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 8 + 3}rem`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        >
          Help!
        </div>
      ))}
    </div>
  );
};

const moreHelpStyles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    background: '#000b1e',
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    textTransform: 'uppercase',
    mixBlendMode: 'multiply',
  },
};

export default MoreHelp;
