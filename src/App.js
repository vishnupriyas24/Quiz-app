import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./styles.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
