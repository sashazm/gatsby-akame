import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeBanner from "../components/welcome-banner"
import AboutUs from "../components/about-us"
import OurServices from "../components/our-services"
import WhyChoose from "../components/why-choose"
import Portfolio from "../components/portfolio"
import CallToAction from "../components/cta"
import LatestBlogPosts from "../components/latest-blogposts"
import OurExperts from "../components/our-experts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeBanner />
    <AboutUs />
    <div className="l-container section__border" />
    <OurServices />
    <WhyChoose />
    <Portfolio />
    <OurExperts />
    <LatestBlogPosts />
    <CallToAction />
  </Layout>
)

export default IndexPage
