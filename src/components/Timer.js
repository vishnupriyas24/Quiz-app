import React, { useState, useEffect } from "react";

const Timer = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime === 1) {
          clearInterval(interval);
          onTimeout();
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeout]);

  return (
    <div className="timer">
      Time left: {timeLeft} seconds
    </div>
  );
};

export default Timer;
