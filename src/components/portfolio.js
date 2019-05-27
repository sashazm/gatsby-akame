import React from "react"

import { FaSearch } from "react-icons/fa"
import img5 from "../images/photos/5.jpg"
import img6 from "../images/photos/6.jpg"
import img7 from "../images/photos/7.jpg"
import img8 from "../images/photos/8.jpg"
import img9 from "../images/photos/9.jpg"

const serviceArr = [
  {
    item: "Hairstyle",
  },
  {
    item: "Haircuts",
  },
  {
    item: "Dye",
  },
  {
    item: "Shave",
  },
  {
    item: "All",
  },
]

const images = [
  {
    image: img5,
  },
  {
    image: img6,
    className: "image-featured portfolio__item",
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
  {
    image: img9,
  },
]

const Portfolio = () => (
  <section>
    <div class="l-container l-vertical-space">
      <header>
        <div class="u-centered">
          <h1>Our Work</h1>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>
      </header>
      <nav className="portfolio-menu__nav">
        <ul className="menu menu--alt">
          {serviceArr.map((service, index) => (
            <li key={index}>
              <button className="menu__link">{service.item}</button>
            </li>
          ))}
        </ul>
      </nav>

      <div class="portfolio">
        {images.map((image, index) => (
          <article
            key={index}
            className={image.className ? image.className : "portfolio__item"}
          >
            <img className="portfolio__image" src={image.image} />
            <div className="portfolio__text portfolio--overlay">
              <h3>Hairstyle</h3>
              <p>Consectetur adipisicing elit sed doe</p>
            </div>
            <FaSearch className="fas fa-search portfolio-icon portfolio--overlay" />
          </article>
        ))}
      </div>
      <footer class="button--centered">
        <a href="#" class="button">
          View All Work
        </a>
      </footer>
    </div>
  </section>
)

export default Portfolio
