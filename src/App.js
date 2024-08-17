import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./styles.css"; // Import the CSS file

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    answer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'What is the largest ocean?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setShowResults(true);
    }
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={
            !showResults ? (
              <div className="App">
                <h1>Quiz App</h1>
                <div className="question-container">
                  <p>{questions[currentQuestion].question}</p>
                  <div className="options">
                    {questions[currentQuestion].options.map((option) => (
                      <div key={option}>
                        <input
                          type="radio"
                          id={option}
                          name="option"
                          value={option}
                          checked={selectedOption === option}
                          onChange={handleOptionChange}
                        />
                        <label htmlFor={option}>{option}</label>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleSubmit}>Next</button>
                </div>
              </div>
            ) : (
              <div>
                <h1>Quiz Results</h1>
                <p>Your score: {score}/{questions.length}</p>
              </div>
            )
          } />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
