import React from "react"

const Comment = ({ author, email, text }) => (
  <div className="comment-box form-field--comment">
    <div className="comment-box-info">
      <span>Comment by: {` ` + author}</span>
      <span>Email:{` ` + email}</span>
    </div>
    <p className="comment-box-text">{text}</p>
  </div>
)

export default Comment
