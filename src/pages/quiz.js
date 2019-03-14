import React, { useReducer } from 'react'
import { initialState, reducer, QuizContext } from '../store/productStore'
import QuizUI from '../components/quiz'
import Results from '../components/results'

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {state.complete ? <Results /> : <QuizUI />}
    </QuizContext.Provider>
  )
}

export default Quiz
