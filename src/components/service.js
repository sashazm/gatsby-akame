import React from "react"

const Service = ({ title, image, text }) => (
  <article className="services__box">
    <img src={image} alt="" />
    <h4>{title}</h4>
    <p>{text}</p>
  </article>
)

export default Service
