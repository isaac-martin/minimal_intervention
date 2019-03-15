import { createContext } from 'react'

const QuizContext = createContext()

const ADD_WINE = 'ADD_WINE'
const GET_RESULTS = 'GET_RESULTS'
const LOADING = 'LOADING'
const INCREMENT = 'INCREMENT'

let reducer = (state, action) => {
  switch (action.type) {
    case ADD_WINE:
      return { ...state, wine: action.wine }
    case GET_RESULTS:
      return { ...state, results: action.results }
    case LOADING:
      return { ...state, loading: action.loading }
    case INCREMENT:
      return { ...state, question: state.question + 1 }
    default:
      return
  }
}

const initialState = {
  wine: 'Red',
  results: [],
  loading: true,
  complete: false,
  question: 1,
}

export { initialState, reducer, QuizContext }
