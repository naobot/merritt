import React from "react"
import Section from "./section"
import Work from "./work"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Mindset() {
  const data = useStaticQuery(
    graphql`
      query mindsetQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/mindset/"}}) {
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
        file(relativePath: {eq: "Mindset.jpg"}) {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 600) {
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
    <Section id="mindset-work-container">
      <Work id="mindset" image={image} post={post} />
    </Section>
  )
}
