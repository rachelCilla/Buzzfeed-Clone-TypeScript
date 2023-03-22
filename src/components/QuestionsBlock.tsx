import React from 'react';
import { Content, Question } from '../../interfaces';
import QuestionBlock from './QuestionBlock';

const QuestionsBlock = ({
  quizItem,
  setChosenAnswerItems,
  setUnansweredQuestionIds,
  unansweredQuestionIds,
  chosenAnswerItems
}:{
  quizItem: Content,
  setChosenAnswerItems:Function,
  setUnansweredQuestionIds:Function,
  unansweredQuestionIds:number[]|undefined,
  chosenAnswerItems:string[]
})=> {
  // renders a single question and its possible answers
  return (
    <div >
      <h2 className='title-block' id={String(quizItem.id)}>{quizItem.text}</h2>
      <div className="questions-container">
        {quizItem?.questions.map((question:Question,_index:number)=>(
          <QuestionBlock
           key={_index}
           quizItemId={quizItem.id} 
            question={question}
            setChosenAnswerItems= {setChosenAnswerItems}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
            unansweredQuestionIds={unansweredQuestionIds}
            chosenAnswerItems={chosenAnswerItems}
            />
        ))}
      </div>
    </div>
  );
}

export default QuestionsBlock;
