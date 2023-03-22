import React, {useState, useEffect} from 'react';
import Title from './components/Title';
import { QuizData, Content } from '../interfaces';
import QuestionsBlock from './components/QuestionsBlock';

function App() {

  const [quiz, setQuiz] = useState<QuizData | null>()
  const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([])
 const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<number[]| undefined>([])

  const fetchData = async () => {
    try { 
    const response =await fetch('http://localhost:8000/quiz-item')
    const json = await response.json()
    setQuiz(json)
    } catch (error) {
      console.log(error)
    }
  }


useEffect(() => {
  fetchData()
}, [])

useEffect(() => {
const unansweredIds = quiz?.content?.map(({id}: Content)=> id)
setUnansweredQuestionIds(unansweredIds)
},[quiz])


console.log(unansweredQuestionIds)

 {/* Renders the Title, Subtitle, and a series of questions represented by 'QuestionsBlock' components*/}
  return (
    <div className='app'>
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
      {/* the map method iterates over each element in the 'quiz.content' array. For each element, a 'QuestionsBlock' Component is rendered */}
      {quiz?.content.map((content: Content, id: Content['id'])  => (
      <QuestionsBlock 
      key={id}
        quizItem={content}
        setChosenAnswerItems={setChosenAnswerItems}
        setUnansweredQuestionIds={setUnansweredQuestionIds}
        unansweredQuestionIds={unansweredQuestionIds}
        chosenAnswerItems={chosenAnswerItems}
      
    />))}
    </div>
  );
}

export default App;
