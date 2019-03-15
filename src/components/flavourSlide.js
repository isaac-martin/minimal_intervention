import React, { useContext } from 'react'
import { QuizContext } from '../store/productStore'
import flavours from '../data/flavour'

const FlavourSlide = () => {
  const { state } = useContext(QuizContext)
  return (
    <div className="slide flavourSlide">
      <h2>I like my wine</h2>
      <div className="flavours">
        {flavours.map(flavour => (
          <span>{flavour}</span>
        ))}
      </div>
      <input className="slider" type="range" name="flavour" min="0" max="20" />
    </div>
  )
}

export default FlavourSlide
