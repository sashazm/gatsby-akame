import React from "react"
import { Link } from "gatsby"

const MenuMain = ({ menuLinks }) => (
  <ul className="menu menu--main menu--push">
    {menuLinks.map(link => (
      <li key={link.link}>
        <Link to={link.link} className="menu__link">
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
)

export default MenuMain
