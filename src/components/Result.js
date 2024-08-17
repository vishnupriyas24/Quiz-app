import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import questions from "../data"; // Import questions data

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, timeTaken } = location.state || { score: 0, timeTaken: 0 };
  const speed = (score / timeTaken).toFixed(2);

  const getPerformanceQuote = () => {
    if (speed > 0.5) return "Great job! You're quick and accurate!";
    if (speed > 0.2) return "Good effort! Keep practicing to improve your speed!";
    return "Don't worry! Keep learning and you'll get faster!";
  };

  return (
    <div className="result">
      <h2>Your Score: {score}/{questions.length}</h2>
      <p>Total Time Taken: {timeTaken} seconds</p>
      <p>Your Speed: {speed} correct answers per second</p>
      <p>{getPerformanceQuote()}</p>
      <button onClick={() => navigate("/")}>Try Again</button>
    </div>
  );
};

export default Result;
