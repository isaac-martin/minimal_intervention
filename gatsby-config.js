require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Minimal Intervention`,
    description: `Sign up for information`,
    author: `isaac-martin`,
  },
  proxy: {
    prefix: '/.netlify/functions',
    url: 'http://localhost:9000',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'minimal-intervention',
        accessToken: '75f418447dd5becdedfd806092ea0145',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nh92btqhsqf0`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
