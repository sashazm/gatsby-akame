import React from "react"

import photo from "../images/photos/15.jpg"

const AboutUs = () => (
  <section>
    <div className="l-container l-vertical-space intro">
      {/* <!-- Section Heading --> */}
      <header className="intro__overlap">
        <div className="intro__front">
          <h1 className="front__title">Hair Salon</h1>
          <p>The House of Hair Salon &amp; Spa</p>
        </div>
        <span className="intro__back">About Us</span>
      </header>
      {/* <!-- About Us Thumbnail --> */}
      <div className="intro__image">
        <img src={photo} alt="Hair styling tools" />
      </div>
      {/* <!-- About Us Content --> */}
      <div className="intro__textbox">
        <h2 className="intro__title">Beautiful Hair Comes From A Legendary.</h2>
        <p className="intro__text">
          “Working in a salon, you look at trends all day long. You’re looking
          at color all the time,what new products are coming out. You’re a part
          of the fashion industry,especially if you’re working in a higher-end
          salon.”
        </p>
        <a href="#" className="button button--alt">
          Read More
        </a>
      </div>
    </div>
  </section>
)

export default AboutUs
