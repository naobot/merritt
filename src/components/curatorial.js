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
              frontmatter {
                title
              }
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
          id="exhibition-intro"
          className="curatorial-text element-container"
          >
          <div
            className="text-container"
            >
            <div className="text-element">
              <h1>{post.frontmatter.title}</h1>
              <div className="text-content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </Section>
  )
}
