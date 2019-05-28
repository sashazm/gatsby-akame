import React from "react"

import Service from "../components/service"
import s1 from "../images/photos/s1.png"
import s2 from "../images/photos/s2.png"
import s3 from "../images/photos/s3.png"
import s4 from "../images/photos/s4.png"

const servicesArr = [
  {
    image: s1,
    title: "Coloring",
    text: "Consectetur adipisicing elit, sed doe eiusmod.",
  },
  {
    image: s2,
    title: "Haircut",
    text: "Ut enim ad minim veniam, quis trud exercitation...",
  },
  {
    image: s3,
    title: "Hairstyle",
    text: "Consectetur adipisicing elit, sed doe eiusmod.",
  },
  {
    image: s4,
    title: "Coloring",
    text: "Ut enim ad minim veniam, quis trud exercitation...",
  },
]

const OurServices = () => (
  <section>
    <div className="l-container">
      <header>
        <div className="l-vertical-space u-centered">
          <h1>Our Services</h1>
          <p>
            The House of Hair Salon &amp; Spa, incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
      </header>

      <div className="services">
        {servicesArr.map(function(service, index) {
          return <Service key={index} {...service} />
        })}
      </div>
    </div>
  </section>
)

export default OurServices
