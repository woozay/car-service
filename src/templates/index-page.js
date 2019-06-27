import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from 'react-helmet'
import { FaRegUser, FaTools, FaCar } from 'react-icons/fa';

import Layout from "../components/Layout"
import Card from "../components/Card"
import ServicesRoll from '../components/ServicesRoll';

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { siteMetadata } = data.site
    const structuredJSON = {
        "@context": "http://schema.org",
        "@type": "AutoRepair",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "GB",
            "addressLocality": siteMetadata.city,
            "streetAddress": siteMetadata.address,
            "postalCode": siteMetadata.postcode
        },
        "description": siteMetadata.description,
        "name": siteMetadata.title,
        "telephone": siteMetadata.tel,
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": siteMetadata.monFriOpening,
                "closes": siteMetadata.monFriClosing
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Saturday"
                ],
                "opens": siteMetadata.satOpening,
                "closes": siteMetadata.satClosing
            }
        ]
    }
    return <Layout>
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(structuredJSON)}</script>
        </Helmet>
        <section className="hero is-info is-medium" style={{
            backgroundImage: `url(${
                !!frontmatter.image.childImageSharp ? frontmatter.image.childImageSharp.fluid.src : frontmatter.image
                })`,
            backgroundPosition: `top left`,
            backgroundSize: 'cover',
            backgroundAttachment: `fixed`,
        }}>
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{frontmatter.heading}</h1>
                    <h2 className="subtitle">{frontmatter.subheading}</h2>
                </div>
            </div>
        </section>
        <section className="section">
            <div class="container has-text-centered">
                <h1 className="title">{frontmatter.main.heading}</h1>
                <div class="divider"></div>
                <h2 className="subtitle">{frontmatter.main.description}</h2>
                <div class="columns is-centered p-t-md p-b-lg">
                    <Card title={frontmatter.main.cards.heading1} content={frontmatter.main.cards.description1}><FaRegUser /></Card>
                    <Card title={frontmatter.main.cards.heading2} content={frontmatter.main.cards.description2}><FaTools /></Card>
                    <Card title={frontmatter.main.cards.heading3} content={frontmatter.main.cards.description3}><FaCar /></Card>
                </div>
            </div>
        </section>
        <section className="section has-background-white-bis">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <img src={
                            !!frontmatter.image2.childImageSharp ? frontmatter.image2.childImageSharp.fluid.src : frontmatter.image2
                        } alt="car bay" />
                    </div>
                    <div className="column">
                        <div className="content">
                            <h1 className="title has-text-centered">{frontmatter.main2.heading}</h1>
                            <div class="divider"></div>
                            <h4>{frontmatter.main2.description}</h4>
                            <div className="columns">
                                <div className="column is-paddingless">
                                    <ul>
                                        {
                                            frontmatter.main2.list.map((element, i) => {
                                                return <li>{element.name}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="content">
                    <h1 className="title has-text-centered">{frontmatter.main3.heading}</h1>
                    <div class="divider"></div>
                    <h4>{frontmatter.main3.description}</h4>
                </div>
                <ServicesRoll count="3" />
                <div className="column is-12 has-text-centered">
                    <Link className="button is-outlined" to="/services">All Services</Link>
                </div>
            </div>
        </section>
    </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
          siteMetadata {
            title
            companyName
            description
            address
            city
            postcode
            tel
            email
            monFriOpening
            monFriClosing
            satOpening
            satClosing
          }
        }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        main {
            heading
            description
            cards {
                heading1
                description1
                heading2
                description2
                heading3
                description3
            }
        }
        main2 {
            heading
            description
            list {
                name
            }
        }
        main3 {
            heading
            description
        }
      }
    }
  }
`