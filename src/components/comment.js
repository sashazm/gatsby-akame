import React from "react"

const Comment = ({ author, email, text }) => (
  <div>
    <p>{author}</p>
    <p>{text}</p>
    <p>{email}</p>
  </div>
)

export default Comment
