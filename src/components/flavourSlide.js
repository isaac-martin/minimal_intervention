import React, { useContext } from 'react'
import { QuizContext } from '../store/productStore'

const FlavourSlide = () => {
  const { state } = useContext(QuizContext)
  return (
    <div className="slide">
      <input type="range" id="start" name="flavour"
         min="0" max="10"/>
  <label for="flavour">Flavour</label>

    </div>
  )
}

export default FlavourSlide
