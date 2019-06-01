import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import PreviewCompatibleImage from './PreviewCompatibleImage';

export default ({count}) => {
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
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
          }
        }
      }
    }
  `)

    const { edges: services } = data.allMarkdownRemark
    return <div className="columns is-multiline">
        {services &&
            services.slice(0, count).map(({ node: post }) => (
                <div className="is-parent column is-4" key={post.id}>
                    <Link className="title" to={post.fields.slug}>
                        <div className="card">
                            <div class="card-image">
                                {post.frontmatter.featuredimage ? (
                                    <div className="featured-thumbnail">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for post ${
                                                    post.title
                                                    }`,
                                            }}
                                        />
                                    </div>
                                ) : null}
                            </div>
                            <div className="card-content has-background-light">
                                <p className="post-meta">
                                    {post.frontmatter.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
    </div>
}