import React from "react"
import PropTypes from "prop-types"

const HeaderTop = ({ siteTitle }) => (
  <section className="header-top">
    <div className="l-container header-top__container">
      <p className="header-top__greeting">Welcome to {siteTitle} hair salon!</p>
      <div className="header-top__info">
        <p className="header-top__time">
          <i className="far fa-clock" data-fa-transform="flip-h" /> Mon-Sat:
          8.00 to 17.00
        </p>
        <p className="header-top__phone-number">
          <span className="header-top__pipe">|</span>
          <i className="fas fa-phone fa-rotate-90" /> Call us: (+12)-345-6789
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
