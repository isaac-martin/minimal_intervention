import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout className="indexPage">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="logo">Minimal Intervention</h1>
  <h3>Hi, we're Minimal Intervention</h3>
    <p className="intro">
    We source small batch, handcrafted and exciting wine from Australia and around the world.  
    </p>
    <p className="news-intro">
      Sign up below for exclusive deals, coupons and news for when we are open
      for business.
    </p>
    <Newsletter />
  </Layout>
)

export default IndexPage
