import React, { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["Hi I'm Divyansh", "Hi I'm Divyansh Srivastava", "I'm a Software Developer"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // When text is fully typed, start deleting after a pause
      if (endValue > texts[index].length + 5) {
        setTimeout(() => setIsForward(false), 1000); // 1 sec pause before deleting
      }

      // When text is fully erased, move to the next phrase
      if (endValue < 0) {
        setIsForward(true);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        setEndValue(0); // Reset the typing effect
      }
    }, 150); // Adjust typing speed

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return <div className="transition ease-in-out duration-300">{currentText}</div>;
};

export default TextChanger;
