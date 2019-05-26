import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import WelcomeBanner from "../components/welcome-banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeBanner />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
