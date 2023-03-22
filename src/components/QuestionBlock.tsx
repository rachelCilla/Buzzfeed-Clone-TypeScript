import React from "react";
import { Question } from "../../interfaces";

// showing each of the 4 options for the question (QuestionsBlock)
const QuestionBlock = ({
   question,
   setChosenAnswerItems,
   setUnansweredQuestionIds,
   unansweredQuestionIds,
   quizItemId,
    chosenAnswerItems
 }: { 
  question: Question,
  setChosenAnswerItems: Function,
  setUnansweredQuestionIds: Function,
  unansweredQuestionIds: number[] | undefined,
  quizItemId: number,
  chosenAnswerItems: string[]
 }) => {

const handleClick = () => {
  setChosenAnswerItems((prevState:string[]) => [...prevState, question.text])
setUnansweredQuestionIds(unansweredQuestionIds?.filter((id:number)=>id !== quizItemId))
}

const validPick = !chosenAnswerItems?.includes(question.text) && 
!unansweredQuestionIds?.includes(quizItemId)

  return (
    <button
      className="question-block"
      onClick={handleClick}
      disabled={validPick}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href="https://www.unsplash.com">Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;
