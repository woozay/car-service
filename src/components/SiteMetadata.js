import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
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
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
