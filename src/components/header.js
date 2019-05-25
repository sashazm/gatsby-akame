import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./header-top"
import HeaderMain from "./header-main"

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    {/* <!-- Top Header Area Start --> */}
    <HeaderTop siteTitle={siteTitle} />
    {/* <!-- Top Header Area End --> */}

    {/* <!-- Main Header Start --> */}
    <HeaderMain menuLinks={menuLinks} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
