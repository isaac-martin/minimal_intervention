import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="logo">Minimal Intervention</h1>
    <p className="intro">
      Hi, we’re Minimal Intervention. We source handcrafted products from across
      the world for you to share with your friends.
    </p>
    <p className="news-intro">
      Sign up below for exclusive deals, coupons and news for when we are open
      for business.
    </p>
    <Newsletter />
  </Layout>
)

export default IndexPage
