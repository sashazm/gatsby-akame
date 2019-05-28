import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogTeaser from "../components/blog-teaser"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section>
        <div class="l-container l-vertical-space">
          <header class="l-vertical-space">
            <div class="u-centered">
              <h1>Blog</h1>
            </div>
          </header>
          <div class="l-3col-max">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogTeaser
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.frontmatter.excerpt}
                path={node.frontmatter.path}
                cover_image={node.frontmatter.cover_image}
              />
            ))}
          </div>
        </div>
      </section>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
            excerpt
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
    }
  }
`

export default Blog
