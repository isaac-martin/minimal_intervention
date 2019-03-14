import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../store/productStore'

const QuizUI = () => {
  const { state, dispatch } = useContext(QuizContext)
  return (
    <div>
      <h5>Wine: {state.wine}</h5>
      <button onClick={() => dispatch({ type: 'ADD_WINE', wine: 'Red' })}>
        Red
      </button>
      <button onClick={() => dispatch({ type: 'ADD_WINE', wine: 'White' })}>
        White
      </button>
      <button onClick={() => dispatch({ type: 'ADD_WINE', wine: 'Rose' })}>
        Rose
      </button>
      <button onClick={() => dispatch({ type: 'ADD_WINE', wine: 'Sparkling' })}>
        Sparkling
      </button>
      <button onClick={() => dispatch({ type: 'ADD_WINE', wine: 'Orange' })}>
        Orange
      </button>
    </div>
  )
}

export default QuizUI
