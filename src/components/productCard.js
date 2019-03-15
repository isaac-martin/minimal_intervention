import React from 'react'

const ProductCard = ({ data }) => {
  return (
    <div className="productCard">
      <img src={data.images.edges[0].node.originalSrc} />
      <div className="text">
        <h4>{data.title}</h4>
        <h5>${data.variants.edges[0].node.price}</h5>
        <p className="description">{data.description}</p>
      </div>
    </div>
  )
}

export default ProductCard
