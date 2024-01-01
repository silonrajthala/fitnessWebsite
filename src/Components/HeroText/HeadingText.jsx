import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TypingText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  border-right: .15em solid #ffc300;
  margin: 0;
  padding: 0;
  font-size: 70px;
color:#fff;
font-weight: bold; 

`;

const AnimatedText = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const texts = ['GO HARD', 'OR', 'GO HOME !']; // Move 'texts' array inside useEffect
    let currentIndex = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (currentIndex < texts[index].length) {
        currentText += texts[index][currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        setTimeout(() => {
          let backspaceText = currentText;
          const backspaceInterval = setInterval(() => {
            if (backspaceText.length > 0) {
              backspaceText = backspaceText.slice(0, -1);
              setText(backspaceText);
            } else {
              clearInterval(backspaceInterval);
              setIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
            }
          }, 200); // increase to slow the speed of backspace
        }, 1000); // type garc ko waiting time
        clearInterval(interval);
      }
    }, 200); //increase to slow speed of typing
    return () => clearInterval(interval);
  }, [index]); // Update dependencies array for useEffect

  return (
    <TypingText>
      {text}
    </TypingText>
  );
};

export default AnimatedText;
