import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

type tTypeWriterProps = {
  strings: string[]
}

const TypeWriter = ({ strings }: tTypeWriterProps) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ currentText, setCurrentText ] = useState('');
  const [ isDeleting, setIsDeleting ] = useState(false);

  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseBetween = 2000;

  useEffect(() => {
    if (isDeleting) {
      if (currentText.length === 0) {
        setCurrentIndex((currentIndex + 1) % strings.length);
        setIsDeleting(false);
      } else {
        setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingDelay);
      }
    } else {
      if (currentText.length === strings[currentIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseBetween);
      } else {
        setTimeout(() => {
          setCurrentText(strings[currentIndex].substring(0, currentText.length + 1));
        }, typingDelay);
      }
    }
  }, [currentText, isDeleting, currentIndex, strings, typingDelay, deletingDelay, pauseBetween]);

  return (
    <Typography
      variant="h4"
      fontWeight={300}
      className="min-w-[200px] overflow-hidden whitespace-nowrap font-mono"
    >
      { currentText }
      <span className="animate-blink">|</span>
    </Typography>
  )
}

export default TypeWriter;