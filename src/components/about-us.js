import React from "react"
import Img from "gatsby-image"
import photo from "../images/photos/15.jpg"
console.log("here is", photo)
const AboutUs = () => (
  <section>
    <div class="l-container l-vertical-space intro">
      {/* <!-- Section Heading --> */}
      <header class="intro__overlap">
        <div class="intro__front">
          <h1 class="front__title">Hair Salon</h1>
          <p>The House of Hair Salon &amp; Spa</p>
        </div>
        <span class="intro__back">About Us</span>
      </header>
      {/* <!-- About Us Thumbnail --> */}
      <div class="intro__image">
        <img src={photo} alt="Hair styling tools" />
      </div>
      {/* <!-- About Us Content --> */}
      <div class="intro__textbox">
        <h2 class="intro__title">Beautiful Hair Comes From A Legendary.</h2>
        <p class="intro__text">
          “Working in a salon, you look at trends all day long. You’re looking
          at color all the time,what new products are coming out. You’re a part
          of the fashion industry,especially if you’re working in a higher-end
          salon.”
        </p>
        <a href="#" class="button button--alt">
          Read More
        </a>
      </div>
    </div>
  </section>
)

export default AboutUs
