import React from "react"
import Expert from "../components/expert"

import certificate1 from "../images/certificate-1.png"
import certificate2 from "../images/certificate-2.png"
import certificate3 from "../images/certificate-3.png"

import img10 from "../images/photos/10.jpg"
import img11 from "../images/photos/11.jpg"
import img12 from "../images/photos/12.jpg"
import img13 from "../images/photos/13.jpg"

const expertsArr = [
  {
    image: img10,
    name: "Mila Hartley",
    specialty: "Hairdresser",
  },
  {
    image: img11,
    name: "Teigan Duran",
    specialty: "Stylist",
  },
  {
    image: img12,
    name: "Tanya Ramsay",
    specialty: "Hairstylist",
  },
  {
    image: img13,
    name: "Donna Carr",
    specialty: "Barber",
  },
]

const OurExperts = () => (
  // <!-- Our Expert Area Start -->
  <section className="l-container l-vertical-space experts">
    {/* <!-- Background Image --> */}
    <div className="experts__background" />

    {/* <!-- Section Heading --> */}
    <div className="experts__teaser">
      <header>
        <h1>Our Experts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex.
        </p>
      </header>

      {/* <!-- Our Certificate --> */}
      <aside className="experts__award-wrapper">
        <img src={certificate1} alt="" className="experts__award" />
        <img src={certificate2} alt="" className="experts__award" />
        <img src={certificate3} alt="" className="experts__award" />
      </aside>
    </div>
    <div className="l-container experts__overlap">
      {expertsArr.map(function(expert, index) {
        return <Expert key={index} {...expert} />
      })}
    </div>
  </section>
)

export default OurExperts
