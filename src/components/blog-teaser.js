import React from "react"
import Img from "gatsby-image"

const BlogTeaser = ({ title, date, excerpt, path, cover_image }) => {
  return (
    <article className="blogpost">
      <a href={path}>
        <Img sizes={cover_image.childImageSharp.sizes} />
      </a>
      <div className="blog-post">
        <a href={path} className="blogpost__link">
          <h3>{title}</h3>
        </a>
        <div>
          <a href={path} className="blogpost__byline">
            <i className="far fa-clock" data-fa-transform="flip-h" />
            {date}
          </a>
          <a href={path} className="blogpost__byline" title="Read the Comments">
            <span className="blogpost__pipe">|</span>{" "}
            <i className="far fa-comments" /> 10
          </a>
        </div>
        <p className="blogpost__text--last">{excerpt}</p>
      </div>
    </article>
  )
}

export default BlogTeaser
