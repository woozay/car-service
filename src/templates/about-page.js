import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, content }) => {

    return (
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered">{title}</h1>
                <div class="divider"></div>
                <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </section>
    )
}

const AboutPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <AboutPageTemplate
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`