import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Curatorial({ children }) {
  const data = useStaticQuery(
    graphql`
      query query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/exhibition-intro/"}}) {
          edges {
            node {
              fileAbsolutePath
              id
              html
            }
          }
        }
      }
    `
  )
  const post = data.allMarkdownRemark.edges[0].node;
  return (
      <Section>
        <div 
          className="curatorial-text"
          data-sal="fade" 
          data-sal-delay="20"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          dangerouslySetInnerHTML={{ __html: post.html }}
          >
        </div>
      </Section>
  )
}
