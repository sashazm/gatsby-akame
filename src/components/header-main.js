import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import MenuMain from "./menu"

const HeaderMain = ({ menuLinks }) => (
  <section class="header-main">
    <div class="l-container header-main__container">
      {/* <!-- Logo --> */}
      <Link href="/">
        <img src={logo} alt="Company Logo" class="header-main__logo" />
      </Link>

      {/* <!-- Nav Main Toggle --> */}
      <div className="nav-toggle js-main-nav-toggle">
        <span className="nav-toggle__icon" />
      </div>

      {/* <!-- Nav Start --> */}
      <nav className="header-main__nav">
        {/* <!-- Mobile Menu Toggle --> */}
        <div className="nav-toggle nav-toggle--mobile nav-toggle--active js-menu-toggle">
          <span className="nav-toggle__icon" />
        </div>
        <MenuMain menuLinks={menuLinks} />
        {/* <!-- Cart Icon --> */}
        <a href="#" class="header-main__cart">
          <i class="fas fa-shopping-cart" />
        </a>

        {/* <!-- Book Link --> */}
        <div class="header-main__booking">
          <a href="#" class="button">
            Book Now
          </a>
        </div>
      </nav>
      {/* <!-- Nav End --> */}
    </div>
  </section>
)

export default HeaderMain
