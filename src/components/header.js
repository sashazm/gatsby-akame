import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import HeaderTop from "./header-top"

const Header = ({ siteTitle }) => (
  <header>
    {/* <!-- Top Header Area Start --> */}
    <HeaderTop siteTitle={siteTitle}/>
    {/* <!-- Top Header Area End --> */}

    {/* <!-- Main Header Start --> */}
    <section class="header-main">
      <div class="l-container header-main__container">
        {/* <!-- Logo --> */}
        <a href="/"><img src={logo} alt="Company Logo" class="header-main__logo"/></a>

        {/* <!-- Nav Main Toggle --> */}
        <div class="nav-toggle js-main-nav-toggle">
          <span class="nav-toggle__icon"></span>
        </div>

        {/* <!-- Nav Start --> */}
        <nav class="header-main__nav">

          {/* <!-- Mobile Menu Toggle --> */}
          <div class="nav-toggle nav-toggle--mobile nav-toggle--active js-menu-toggle">
            <span class="nav-toggle__icon"></span>
          </div>

          <ul class="menu menu--main menu--push">
            <li><a href="/" class="menu__link">Home</a></li>
            <li><a href="/page.html" class="menu__link">Pages</a></li>
            <li><a href="#" class="menu__link">Portfolio</a></li>
            <li><a href="#" class="menu__link">Services</a></li>
            <li><a href="#" class="menu__link">About Us</a></li>
            <li><a href="#" class="menu__link">Blog</a></li>
            <li><a href="#" class="menu__link">Contact</a></li>
          </ul>

          {/* <!-- Cart Icon --> */}
          <a href="#" class="header-main__cart"><i class="fas fa-shopping-cart"></i></a>

          {/* <!-- Book Link --> */}
          <div class="header-main__booking">
            <a href="#" class="button">Book Now</a>
          </div>
        </nav>
        {/* <!-- Nav End --> */}
      </div>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
