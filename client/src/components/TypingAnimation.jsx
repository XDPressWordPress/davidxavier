import { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  return (
    <div className={`typing-animation ${className}`}>
      {displayedText}
    </div>
  );
};

export default TypingAnimation;
