import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeBanner from "../components/welcome-banner"
import AboutUs from "../components/about-us"
import OurServices from "../components/our-services"
import WhyChoose from "../components/why-choose"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeBanner />
    <AboutUs />
    <div class="l-container section__border" />
    <OurServices />
    <WhyChoose />
  </Layout>
)

export default IndexPage
