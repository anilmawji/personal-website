import { useState, useEffect } from 'react';

interface Props {
  text: string;
  delay: number;
  looped: boolean;
}

const Typewriter = ({ text, delay, looped }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (looped) {
      setCurrentIndex(0);
      setCurrentText('');
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, looped, text]);

  return (
    <span>{currentText}</span>
  );
}

export default Typewriter;