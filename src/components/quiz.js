import React, { useContext } from 'react'
import { QuizContext } from '../store/productStore'
import ColorSlide from './colorSlide'
import FlavourSlide from './flavourSlide'

const getSlide = num => {
  if (num === 1) {
    return <ColorSlide />
  } else if (num === 2) {
    return <FlavourSlide />
  }
}

const QuizUI = () => {
  const { state, dispatch} = useContext(QuizContext)
  return (
    <div className="slideWrapper">
      {getSlide(state.question)}   
      <button className='next' onClick={() => dispatch({ type: 'INCREMENT',})}>
         {state.question < 2 ? 'Next' : 'Get Results'}
      </button> 
    </div>
  )
}

export default QuizUI
