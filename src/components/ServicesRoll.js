import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "service-post" } } }
        ) {
        edges {
          node {
            excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMarkdownRemark
  return <div className="">{JSON.stringify(posts)}</div>
}