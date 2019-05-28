import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import img42 from "../images/photos/42.jpg"
import img43 from "../images/photos/43.jpg"
const BlogPost1 = () => (
  <>
    <SEO title="Post-1" />

    <div className="section__border section__border--start" />
    <article className="article">
      <div className="l-container">
        <header className="article__title">
          <div>
            <a href="#" className="article__byline">
              <i className="far fa-clock" data-fa-transform="flip-h" />{" "}
              September 27, 2018
            </a>
            <a href="#" className="article__byline" title="Read the Comments">
              <span className="blogpost__pipe">|</span>{" "}
              <i className="far fa-comments" /> 10
            </a>
          </div>
          <h1 className="article__title-text">
            Finally: How to Make Your Aggressively Straight Hair Hold a Curl
          </h1>
        </header>

        <img src={img42} alt="" className="article__image" />

        <div className="article__2col">
          {/* <!-- Post Share --> */}
          <div className="social-media social-media--vertical">
            <a href="#" className="social-icon social-icon--facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="social-icon social-icon--twitter">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="social-icon social-icon--google-plus">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="social-icon social-icon--instagram">
              <i className="fab fa-instagram" />
            </a>
          </div>

          <section className="article__body">
            {/* <!-- Post Content --> */}
            <section className="article__text">
              <div className="article__body--indented">
                <p>
                  <span className="drop-cap">
                    <b>S</b>
                  </span>
                  tress has nowadays become a part of people’s lives. To relieve
                  this stress, people have greater than ever expectations from
                  personal care services they get. If you are a Salon &amp; Spa
                  owner and think that your customer is
                </p>

                <p>
                  coming to your place only for a haircut, skin treatment, or
                  just a manicure, you are wrong. People now consider their
                  visit to the Salon &amp; Spa as not just a beautification
                  process but a spiritual getaway. You don’t know which customer
                  entered your Salon &amp; Spa to get a pedicure and their only
                  intent was to uplift their soul and feel good about
                  themselves.
                </p>

                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
              <blockquote>
                “Hospitality is a very wide field to talk about, so in this
                article I’ll share few tips, small things that will make a big
                impact on your customers’ experience”.
              </blockquote>

              <p>
                How your staff greets them, ambience of the waiting room, how
                well you understand customer requirements, and then precisely
                delivering what they wanted, everything is an experience.
              </p>

              <ul className="bullet-point-list">
                <li className="bullet-point-list__item">
                  <strong>How your staff greets them?</strong> The ambience of
                  your Salon &amp; Spa is crucial in making the first
                  impression. The initial vibes that your customer feels when
                  they enter is what stays with them. It’s important that you
                  make these vibes as positive as possible as it has a
                  sub-conscious effect on the customer.
                </li>

                <li className="bullet-point-list__item">
                  <strong>Humans not Robots:</strong> Train your staff to treat
                  customers like family. Take special care that their
                  interaction with the customer isn’t robotic and the overall
                  interaction is as human as possible.
                </li>

                <li className="bullet-point-list__item">
                  <strong>Remember ‘The Name’:</strong> Regular customers don’t
                  like to enter a Salon &amp; Spa and explain all their
                  preferences again. Remember what they like, remember their
                  dislikes, and most importantly, remember their name.
                </li>
              </ul>

              <p>
                It’s time that you build your Salon &amp; Spa like a getaway for
                your customers whenever they feel stressed in life. Go an extra
                mile to make your customers feel great about themselves. Give
                your opinions on what is good for them and what’s not, but be a
                good listener.{" "}
              </p>
            </section>

            {/* <!-- Border --> */}
            <div className="section__border section__border--end" />

            {/* <!-- Post Author Area --> */}
            <footer className="author">
              {/* <!-- Author Meta --> */}
              <div className="author__info">
                <img
                  src={img43}
                  alt="Photo of guest writer"
                  className="author__image image-circle"
                />
                <div className="author__name">
                  <p>Gusest Writer</p>
                  <h4>John Smith</h4>
                </div>
              </div>

              {/* <!-- Author Social Info --> */}
              <div className="social-media author__social-media">
                <a href="#" className="social-icon social-icon--facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon social-icon--twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon social-icon--instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </footer>

            {/* <!-- Leave A Reply --> */}
            <aside className="comment-form u-centered ">
              <h2 className="comment-form__title">Leave a comment:</h2>

              {/* <!-- Form --> */}
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

                <button
                  type="submit"
                  className="button button--alt comment-form__button"
                >
                  Post Comment
                </button>
              </form>
            </aside>
          </section>
        </div>
      </div>
    </article>
    {/* <!-- Blog Details Area End --> */}

    <Link to="/">Go back to the homepage</Link>
  </>
)

export default BlogPost1
