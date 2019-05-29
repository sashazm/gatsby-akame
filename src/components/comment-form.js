import React from "react"

const CommentForm = () => (
  <aside className="comment-form u-centered ">
    <h2 className="comment-form__title">Leave a comment:</h2>

    <form action="#" method="post">
      <label className="u-visually-hidden" for="message">
        Message
      </label>
      <textarea
        className="form-field form-field--tall"
        name="message"
        id="message"
        placeholder="Start the discussion..."
      />

      <label className="u-visually-hidden" for="message-name">
        Your Name
      </label>
      <input
        className="form-field"
        type="text"
        name="message-name"
        id="message-name"
        placeholder="Your Name"
      />

      <label className="u-visually-hidden" for="message-email">
        Email
      </label>
      <input
        className="form-field"
        type="email"
        name="message-email"
        id="message-email"
        placeholder="Email"
      />

      <button type="submit" className="button button--alt comment-form__button">
        Post Comment
      </button>
    </form>
  </aside>
)

export default CommentForm
