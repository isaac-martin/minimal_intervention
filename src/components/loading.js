import React from 'react'
import loader from '../images/wine-loading.gif'
const Loading = () => {
  return (
    <>
      <img src={loader} className="loading" />
      <h2>Loading Your Results</h2>
    </>
  )
}

export default Loading
