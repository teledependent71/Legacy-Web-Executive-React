import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Legacy Web Executive</title>
        <meta property="og:title" content="Legacy Web Executive" />
      </Helmet>
    </div>
  )
}

export default Home
