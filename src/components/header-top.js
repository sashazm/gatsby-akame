import React from "react"
import PropTypes from "prop-types"

const HeaderTop = ({ siteTitle }) => (
  <section class="header-top">
    <div class="l-container header-top__container">
      <p class="header-top__greeting">Welcome to {siteTitle} hair salon!</p>
      <div class="header-top__info">
        <p class="header-top__time"><i class="far fa-clock" data-fa-transform="flip-h"></i> Mon-Sat: 8.00 to 17.00</p>
        <p class="header-top__phone-number"><span class="header-top__pipe">|</span><i class="fas fa-phone fa-rotate-90"></i> Call us: (+12)-345-6789</p>
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
