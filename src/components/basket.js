import React from "react"
import Section from "./section"
import Work from "./work"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Basket({ children }) {
  const data = useStaticQuery(
    graphql`
      query basketQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/forest/"}}) {
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
        file(relativePath: {eq: "ForestSeedBasket.jpg"}) {
          id
          publicURL
          childImageSharp {
            fluid(maxWidth: 800) {
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
    <Section id="basket-work-container">
      <Work id="basket" image={image} post={post} />
    </Section>
  )
}
