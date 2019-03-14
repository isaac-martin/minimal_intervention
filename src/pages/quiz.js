import React from 'react'
import QuizUI from '../components/quiz'
import Results from '../components/results'

import { QuizProvider } from '../store/productStore'

function Quiz() {
  //   const [store, dispatch] = useReducer(reducer, initialState)
  //   const [wine, setWine] = useState('Red')
  //   const [loading, setLoading] = useState(false)
  //   const [results, setResults] = useState([])

  //   const fetchData = wine => {
  //     setLoading(true)
  //     fetch('https://minimal-intervention.myshopify.com/api/graphql', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-Shopify-Storefront-Access-Token': '75f418447dd5becdedfd806092ea0145',
  //       },
  //       body: JSON.stringify({
  //         query: `query{
  //   products(first: 100 query:"product_type:'${wine}'") {
  //     edges {
  //       node {
  //         productType
  //         id
  //         title
  //         handle
  //         descriptionHtml
  //         description
  //         images(first: 1) {
  //           edges {
  //             node {
  //               originalSrc
  //             }
  //           }
  //         }
  //         variants(first:1) {
  //           edges {
  //             node {
  //               price
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }`,
  //       }),
  //     })
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(responseAsJson => {
  //         console.log(responseAsJson.data.products.edges)
  //         setResults(responseAsJson.data.products.edges)
  //         setLoading(false)
  //       })
  //   }

  return (
    <>
      <QuizProvider>
        Test
        <QuizUI />
        <Results />
        {/* {results.length === 0
      <div className="quiz">
          <button onClick={() => setWine('White')}>
            Change Wine To White{' '}
          </button>
          <button onClick={() => fetchData(wine)}>Fetch Products</button>
        </div>
      } */}
      </QuizProvider>
    </>
  )
}

export default Quiz
