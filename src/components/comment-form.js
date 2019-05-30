import React from "react"
import Comment from "./comment"

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    // set the initial state
    this.state = {
      text: "",
      author: "",
      email: "",
      list: [],
    }
  }

  addToList(text, author, email) {
    const comment = {
      text,
      author,
      email,
    }

    this.setState({
      list: [...this.state.list, comment],
    })
  }

  // retrieve input from the message field.
  handleTextChange(e) {
    this.setState({ text: e.target.value })
  }

  // retrieve input from the author field.
  handleAuthorChange(e) {
    this.setState({ author: e.target.value })
  }

  // retrieve input from the email field.
  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  // when submit button is pressed
  handleSubmit(e) {
    e.preventDefault()
    // set the values being passed to a variable and trim white spaces
    const text = this.state.text.trim()
    const author = this.state.author.trim()
    const email = this.state.email.trim()

    // brake out of this function if any of the fields were left empty.
    if (!text || !author || !email) {
      return
    }
    // pass the values retrieved by the form into list array
    this.addToList(text, author, email)
    // reset form to display empty fields
    this.setState({ text: "", author: "", email: "" })
  }

  render() {
    return (
      <aside className="comment-form u-centered ">
        <h2 className="comment-form__title">Leave a comment:</h2>
        <form action="#" method="post" onSubmit={e => this.handleSubmit(e)}>
          <label className="u-visually-hidden" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-field form-field--tall"
            name="message"
            id="message"
            placeholder="Start the discussion..."
            value={this.state.text}
            onChange={e => this.handleTextChange(e)}
          />

          <label className="u-visually-hidden" htmlFor="message-name">
            Your Name
          </label>
          <input
            className="form-field"
            type="text"
            name="message-name"
            id="message-name"
            placeholder="Your Name"
            value={this.state.author}
            // binding happens automatically through (e) =>
            // event handler function is called
            onChange={e => this.handleAuthorChange(e)}
          />

          <label className="u-visually-hidden" htmlFor="message-email">
            Email
          </label>
          <input
            className="form-field"
            type="email"
            name="message-email"
            id="message-email"
            placeholder="Email"
            value={this.state.email}
            // binding happens automatically through (e) =>
            // event handler function is called
            onChange={e => this.handleEmailChange(e)}
          />

          <button
            type="submit"
            className="button button--alt comment-form__button"
          >
            Post Comment
          </button>
        </form>
        {this.state.list.reverse().map((item, index) => (
          <Comment
            key={index}
            author={item.author}
            text={item.text}
            email={item.email}
          />
        ))}
      </aside>
    )
  }
}

export default CommentForm
