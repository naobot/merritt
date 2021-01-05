import React from "react"
import Section from "./section"
import Work from "./work"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LoveSong({ children }) {
  const data = useStaticQuery(
    graphql`
      query loveSongQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/love.song/"}}) {
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
        file(relativePath: {eq: "LoveSong.jpeg"}) {
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
    <Work id="lovesong" image={image} post={post} />
  )
}
