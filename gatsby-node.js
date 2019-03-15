const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve('./src/templates/product.js')
  const blogTemplate = path.resolve('./src/templates/BlogPost.js')
  const collectionTemplate = path.resolve('./src/templates/collection.js')

  const products = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            id
            title
            descriptionHtml
            images {
              id
              originalSrc
            }
            variants {
              id
              price
            }
            shopifyId
            handle
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allShopifyProduct.edges.forEach(edge => {
      createPage({
        path: `/products/${edge.node.handle}`,
        component: productTemplate,
        context: {
          id: edge.node.id,
          title: edge.node.title,
          description: edge.node.descriptionHtml,
          images: edge.node.images,
          shopifyId: edge.node.shopifyId,
          price: edge.node.variants[0].price,
        },
      })
    })
  })

  const collections = graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            title
            handle
            descriptionHtml
            handle
            products {
              title
              handle
              images {
                id
              }
              variants {
                price
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allShopifyCollection.edges.forEach(edge => {
      createPage({
        path: `/collections/${edge.node.handle}`,
        component: collectionTemplate,
        context: {
          id: edge.node.id,
          title: edge.node.title,
          description: edge.node.descriptionHtml,
          products: edge.node.products,
        },
      })
    })
  })

  const posts = graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            handle
            featuredImage {
              id
              file {
                url
                fileName
                contentType
              }
            }
            childContentfulBlogPostBlogContentRichTextNode {
              id
              content {
                nodeType
                content {
                  value
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        path: `/posts/${edge.node.handle}`,
        component: blogTemplate,
        context: {
          id: edge.node.id,
          title: edge.node.title,
        },
      })
    })
  })

  return Promise.all([posts, products, collections])
}
