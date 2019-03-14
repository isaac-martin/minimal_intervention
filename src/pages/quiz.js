import React, { useReducer } from 'react'
import { initialState, reducer, QuizContext } from '../store/productStore'
import QuizUI from '../components/quiz'
import Results from '../components/results'
import '../styles/quiz.css'


const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {state.question <= 2 ?  <QuizUI />:<Results />}

    </QuizContext.Provider>
  )
}

export default Quiz
