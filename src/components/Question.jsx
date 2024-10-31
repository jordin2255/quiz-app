import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
export default function Question({question,onSkipAnswer,answers,selectedAnswer,answerState,onSelectAnswer}){
  return(
    <div id="question">
        <QuestionTimer
          
          timeout={10000}
          onTimeout={onSkipAnswer}
        />
        <h2>{question}</h2>
        <Answers
          
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelectAnswer}
        />
      </div>

  )
}