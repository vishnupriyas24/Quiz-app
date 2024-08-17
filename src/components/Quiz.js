import React, { useState } from "react";
import questions from "../data";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);
  const navigate = useNavigate();

  const handleAnswerOptionClick = (isCorrect, timeSpent) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setTimeTaken(timeTaken + timeSpent);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/result", { state: { score, timeTaken } });
    }
  };

  const handleTimeout = () => {
    handleAnswerOptionClick(false, 30);
  };

  return (
    <div className="quiz">
      <h2>{questions[currentQuestion].question}</h2>
      <Timer duration={30} onTimeout={handleTimeout} /> {/* Set timer to 30 seconds */}
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer, 30 - timeTaken)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
