import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Mindset({ children }) {
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
    <Section>
      <div id="mindset" className="work">
        <div 
          className="work-image" 
          data-sal="fade" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <Img fluid={image.fluid} alt="Mindset (sweetgrass)" />
        </div>
      </div>
    </Section>
  )
}
