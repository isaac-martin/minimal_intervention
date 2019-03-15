async function getProducts(wine, num) {
  const result = await fetch(
    'https://minimal-intervention.myshopify.com/api/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': '75f418447dd5becdedfd806092ea0145',
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
  const prods = await result.json()
  const arr = prods.data.products.edges

  const prodRes = arr
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, num)
  return prodRes
}

export default getProducts
