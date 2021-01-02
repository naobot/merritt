import React from "react"
import Section from "./section"
import Work from "./work"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Shawl({ children }) {
  const data = useStaticQuery(
    graphql`
      query shawlQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/shawl/"}}) {
          edges {
            node {
              fileAbsolutePath
              id
              frontmatter {
                credit
                info
                title
              }
              html
            }
          }
        }
        file(relativePath: {eq: "FancyShawl.jpg"}) {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 480) {
              base64
              aspectRatio
              src
              srcSet
              sizes
              originalImg
            }
          }
        }
      }
    `
  );
  const post = data.allMarkdownRemark.edges[0].node;
  const image = data.file.childImageSharp;
  return (
    <Section id="shawl-work-container">
      <Work id="shawl" image={image} post={post} />
    </Section>
  )
}
