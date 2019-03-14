import React, { useContext, useEffect } from 'react'
import getProducts from '../fetch/products'
import { QuizContext } from '../store/productStore'

const Results = () => {
  const { state, dispatch } = useContext(QuizContext)

  async function fetchResults() {
    const result = await getProducts(state.wine, 5)
    dispatch({ type: 'GET_RESULTS', results: result })
  }

  useEffect(() => {
    fetchResults()
  }, [])

  return (
    <div>
      {
        <h5>
          Wine: {state.wine}
          {state.results.length}
        </h5>
      }
    </div>
  )
}

export default Results
