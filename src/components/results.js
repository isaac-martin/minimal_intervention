import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../store/productStore'

function Results() {
  const [results, setResults] = useState({ results: [] })

  const wine = 'Red'
  useEffect(async () => {
    const res = fetch(
      'https://minimal-intervention.myshopify.com/api/graphql',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token':
            '75f418447dd5becdedfd806092ea0145',
        },
        body: JSON.stringify({
          query: `query{
    products(first: 100 query:"product_type:'${wine}'") {
      edges {
        node {
          productType
          id
          title
          handle
          descriptionHtml
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          variants(first:1) {
            edges {
              node {
                price
              }
            }
          }
        }
      }
    }
  }`,
        }),
      }
    )
    const json = await res.json()

    setResults(json.data.products.edges)
  })

  // const { state } = useContext(QuizContext)
  return <div>{/* <h5>Wine: {state.wine}</h5> */}</div>
}

export default Results
