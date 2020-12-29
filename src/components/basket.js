import React from "react"
import Section from "./section"
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
            fluid(maxWidth: 320) {
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
      <div id="basket" className="work">
        <div 
          className="work-image" 
          data-sal="fade" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <Img fluid={image.fluid} alt={post.frontmatter.title} />
          <div
            className="work-desc"
            >
            <em>{post.frontmatter.title}</em>,&nbsp;
            {post.frontmatter.info}.&nbsp;
            {post.frontmatter.credit}.
          </div>
        </div>
      </div>
    </Section>
  )
}
