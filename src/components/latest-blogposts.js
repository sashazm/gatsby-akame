import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BlogTeaser from "../components/blog-teaser"

const LatestBlogPosts = () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 3
        ) {
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
    `}
    render={data => (
      <section>
        <div className="l-container l-vertical-space">
          <header className="l-vertical-space">
            <div className="u-centered">
              <h1>Latest News</h1>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </header>
          <div className="l-3col-max">
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
    )}
  />
)

export default LatestBlogPosts
