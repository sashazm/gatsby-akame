import React from "react"
import img4 from "../images/photos/4.jpg"
import { FaCheck } from "react-icons/fa"

const checkpointArr = [
  {
    text: "We Strive For LIVE Answer On Our Calls.",
  },
  {
    text: "A Wide Spectrum Of Skills And Experience.",
  },
  {
    text: "Fast Response To Requests &amp; Critical Response Time Guaranteed.",
  },
  {
    text: "We Help Solve Your Business Problems.",
  },
]

const WhyChoose = () => (
  <section className="l-vertical-space section-highlight">
    <div className="l-container why-choose">
      {/* <!-- Section Heading --> */}
      <div>
        <img
          src={img4}
          alt="Lady with styled hair"
          className="why-choose__image"
        />
      </div>
      <section>
        <header>
          <h1>Why Choose Us</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </header>

        {/* <!-- Choose Us Content --> */}
        <ul className="why-choose__list">
          {checkpointArr.map((checkpoint, index) => (
            <li key={index}>
              <FaCheck className="checkbox checkbox__check checkbox__check--alt" />
              {checkpoint.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  </section>
)

export default WhyChoose
