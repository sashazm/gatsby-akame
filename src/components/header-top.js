import React from "react"
import PropTypes from "prop-types"
import { FaPhone, FaClock } from "react-icons/fa"

const HeaderTop = ({ siteTitle }) => (
  <section className="header-top">
    <div className="l-container header-top__container">
      <p className="header-top__greeting">Welcome to {siteTitle} hair salon!</p>
      <div className="header-top__info">
        <p className="header-top__time">
          <FaClock /> Mon-Sat: 8.00 to 17.00
        </p>
        <p className="header-top__phone-number">
          <span className="header-top__pipe">|</span>
          <FaPhone className="flip-h" /> Call us: (+12)-345-6789
        </p>
      </div>
    </div>
  </section>
)

HeaderTop.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderTop.defaultProps = {
  siteTitle: ``,
}

export default HeaderTop
