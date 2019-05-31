import React from "react"

const Expert = ({ image, name, specialty }) => (
  <article className="single-expert">
    <img src={image} alt="" className="expert__image" />
    <div className="single-expert__text">
      <h4>{name}</h4>
      <p>{specialty}</p>
    </div>
  </article>
)

export default Expert
