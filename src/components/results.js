import React, { useContext, useEffect } from 'react'
import Loading from './loading'
import ProductCard from './productCard'

import getProducts from '../fetch/products'
import { QuizContext } from '../store/productStore'

const Results = () => {
  const { state, dispatch } = useContext(QuizContext)

  async function fetchResults() {
    const result = await getProducts(state.wine, 4)
    dispatch({ type: 'GET_RESULTS', results: result })
    setTimeout(() => {
      dispatch({ type: 'LOADING', loading: false })
    }, 2200)
  }

  useEffect(() => {
    fetchResults()
  }, [])

  return (
    <div className="results">
      <div className="resultsInner">
        {state.loading ? (
          <Loading />
        ) : (
          <div className="productWrap">
            {state.results.map(product => (
              <ProductCard data={product.node} />
            ))}{' '}
          </div>
        )}
      </div>
    </div>
  )
}

export default Results
