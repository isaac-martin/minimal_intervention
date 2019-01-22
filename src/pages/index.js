import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="logo">Minimal Intervention</h1>
    <p>
      We're harvesting something exciting, sign up below to receive a discount
      and join the waitlist.
    </p>
    <Newsletter />
  </Layout>
)

export default IndexPage
