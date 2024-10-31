import { useState, useCallback } from "react";

import QUESTIONS from "../questions";

import quizCompleteImage from "../assets/quiz-complete.png";
import Question from "./Question";
export default function Quiz() {
  
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    userAnswers.length ;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
     
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });
      
    },
    []
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Trophy image" />
        <h2>SUMMARY</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
