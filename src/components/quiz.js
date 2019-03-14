import React, { useContext } from 'react'
import { QuizContext } from '../store/productStore'

function QuizUI() {
  const { state, dispatch } = useContext(QuizContext)
  return (
    <div>
      {/* <h5>Wine: {state.wine}</h5> */}
      <button onClick={() => dispatch({ type: 'ADD_WINE', payload: 'Red' })}>
        Red
      </button>
      <button onClick={() => dispatch({ type: 'ADD_WINE', payload: 'White' })}>
        Red
      </button>
    </div>
  )
}

export default QuizUI
