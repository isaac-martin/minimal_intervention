import React, { useContext } from 'react'
import { QuizContext } from '../store/productStore'
import WineCard from './wineCard'
import wines from '../data/wines'


const ColorSlide = () => {
  return (
    <div className="slide">
      {wines.map(wine => <WineCard wine={wine}/>)}
    </div>
  )
}

export default ColorSlide
