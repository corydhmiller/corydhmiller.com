import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Cory Miller" keywords={[`cory miller`, `front-end developer`, `gatsby`]} />
    <h1>Cory Miller</h1>
    <p>Exploring front end development, creativity, and the ongoing balance of life, work, and family.</p>
    <Link to="/blog/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
