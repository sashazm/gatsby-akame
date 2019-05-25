import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import MenuMain from "./menu"

class HeaderMain extends React.Component {
  constructor(props) {
    super(props)
    // Determines whether the mobile menu is showing or not
    this.state = { showMenu: false }
  }

  // toggle the mobile menu visibility by reversing the current state of the showMenu
  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  // force the mobile menu to be hidden
  hideMenu = () => {
    this.setState({
      showMenu: false,
    })
  }

  render() {
    const classMainActive = this.state.showMenu
      ? "header-main__nav--active"
      : ""
    const classToggleActive = this.state.showMenu ? "nav-toggle--active" : ""

    return (
      <section className="header-main">
        <div className="l-container header-main__container">
          {/* <!-- Logo --> */}
          <Link to="/">
            <img src={logo} alt="Company Logo" className="header-main__logo" />
          </Link>

          {/* <!-- Nav Main Toggle --> */}
          {/* when button is clicked fire up a toggleMenu method */}
          <div
            className={`nav-toggle ${classToggleActive}`}
            onClick={this.toggleMenu}
          >
            <span className="nav-toggle__icon" />
          </div>

          {/* <!-- Nav Start --> */}
          {/* ${classMainActive} is to print additional className: if showMenu is "false" print ""; if showMenu is "true" print "header-main__nav--active" */}
          <nav className={`header-main__nav ${classMainActive}`}>
            {/* <!-- Mobile Menu Toggle --> */}
            <div
              className="nav-toggle nav-toggle--mobile nav-toggle--active"
              onClick={this.hideMenu}
            >
              <span className="nav-toggle__icon" />
            </div>
            <MenuMain menuLinks={this.props.menuLinks} />
            {/* <!-- Cart Icon --> */}
            <a href="#" className="header-main__cart">
              <i className="fas fa-shopping-cart" />
            </a>

            {/* <!-- Book Link --> */}
            <div className="header-main__booking">
              <a href="#" className="button">
                Book Now
              </a>
            </div>
          </nav>
          {/* <!-- Nav End --> */}
        </div>
      </section>
    )
  }
}

export default HeaderMain
