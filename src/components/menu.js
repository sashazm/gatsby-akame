import React from "react"
import { Link } from "gatsby"

const MenuMain = ({ menuLinks }) => (
  <ul className="menu menu--main menu--push">
    {menuLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.link}
          className="menu__link"
          activeClassName="menu--active"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
)

export default MenuMain
