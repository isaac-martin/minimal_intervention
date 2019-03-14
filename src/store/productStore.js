import React, { createContext, useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WINE':
      return { ...state, wine: action.payload }
    default:
      return
  }
}

const initialState = { wine: '' }
const QuizContext = createContext(initialState)

function QuizProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <QuizContext.Provider value={(state, dispatch)}>
      {props.children}
    </QuizContext.Provider>
  )
}

export { QuizContext, QuizProvider }
