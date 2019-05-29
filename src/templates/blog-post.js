import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import CommentForm from "../components/comment-form"

import {
  FaClock,
  FaComments,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaArrowCircleRight,
  FaArrowCircleLeft,
} from "react-icons/fa"

class BlogTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const cover_image = post.frontmatter.cover_image
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location}>
        <div className="section__border section__border--start" />
        <main>
          <article className="article">
            <div className="l-container">
              <header className="article__title">
                <div>
                  <a href="/" className="article__byline">
                    <FaClock /> {post.frontmatter.date}
                  </a>
                  <a
                    href="/"
                    className="article__byline"
                    title="Read the Comments"
                  >
                    <span className="blogpost__pipe">|</span> <FaComments /> 10
                  </a>
                </div>
                <h1 className="article__title-text">
                  {post.frontmatter.title}
                </h1>
              </header>

              <Img
                sizes={cover_image.childImageSharp.sizes}
                className="article__image"
              />

              <div className="article__2col">
                {/* <!-- Post Share --> */}
                <div className="social-media social-media--vertical">
                  <a href="/" className="social-icon social-icon--facebook">
                    <FaFacebookF />
                  </a>
                  <a href="/" className="social-icon social-icon--twitter">
                    <FaTwitter />
                  </a>
                  <a href="/" className="social-icon social-icon--google-plus">
                    <FaGooglePlusG />
                  </a>
                  <a href="/" className="social-icon social-icon--instagram">
                    <FaInstagram />
                  </a>
                </div>

                <section className="article__body">
                  {/* <!-- Post Content --> */}
                  <section
                    className="article__text article__body--indented"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />
                  <div className="section__border section__border--end" />
                  {/* <!-- Post Author Area --> */}
                  <footer className="author">
                    {/* <!-- Author Meta --> */}
                    <div className="author__info">
                      <Img
                        sizes={cover_image.childImageSharp.sizes}
                        className="author__image image-circle"
                      />
                      <div className="author__name">
                        <p>Guest Writer</p>
                        <h4>{post.frontmatter.author}</h4>
                      </div>
                    </div>

                    {/* <!-- Author Social Info --> */}
                    <div className="social-media author__social-media">
                      <a href="/" className="social-icon social-icon--facebook">
                        <FaFacebookF />
                      </a>
                      <a href="/" className="social-icon social-icon--twitter">
                        <FaTwitter />
                      </a>
                      <a
                        href="/"
                        className="social-icon social-icon--instagram"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </footer>

                  <CommentForm />

                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.path} rel="prev">
                          <p className="blog-nav-prev">
                            ← {previous.frontmatter.title}
                          </p>
                          <FaArrowCircleLeft className="blog-nav--mobile" />
                        </Link>
                      )}
                    </li>

                    <li>
                      {next && (
                        <Link to={next.fields.path} rel="next">
                          <FaArrowCircleRight className="blog-nav--mobile" />
                          <p className="blog-nav-next">
                            {next.frontmatter.title} →
                          </p>
                        </Link>
                      )}
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
        </main>
      </Layout>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { path: { eq: $path } }) {
      id
      excerpt
      html
      frontmatter {
        author
        title
        date
        path
        cover_image {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
