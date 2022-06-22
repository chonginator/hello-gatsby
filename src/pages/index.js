import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://gatsbytutorialexample.gatsbyjs.io/static/f7824272fbac2fda6a7bdb6f3567275f/5cc0d/clifford.webp"
        alt="Clifford"
      />
    </Layout>
  )
}

export default IndexPage
