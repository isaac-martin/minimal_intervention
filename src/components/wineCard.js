import React, { useContext } from 'react'
import classNames from 'classnames'
import { QuizContext } from '../store/productStore'
import Wine from '../svgs/full.svg'
import Sparkling from '../svgs/sparkling.svg'
import SVG from 'react-inlinesvg';



const WineCard = props => {
  const { dispatch, state } = useContext(QuizContext)

 const classes = classNames('wineCard', props.wine, { 'active': props.wine === state.wine });
  return (
    <button className={classes} onClick={() => dispatch({ type: 'ADD_WINE', wine: props.wine })}>
     {props.wine === 'Sparkling' ? <SVG src={Sparkling}/> : <SVG src={Wine}/>}
      <h3>{props.wine}</h3>
    </button>
  )
}

export default WineCard
