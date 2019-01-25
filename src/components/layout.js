import React from 'react'
import PropTypes from 'prop-types'
// import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div
    style={{
      height: `100vh`,
      display: `flex`,
    }}
  >
    {/* <Header /> */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 600,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        display: `flex`,
        flexDirection: `column`,
        textAlign: `center`,
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
