import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import VideoWork from "./videowork"

export default function Disappearing() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/picking/"}}) {
          edges {
            node {
              fileAbsolutePath
              id
              frontmatter {
                credit
                info
                title
                videoUrl
              }
              html
            }
          }
        }
      }
    `
  );
  const post = data.allMarkdownRemark.edges[0].node;
  return (
    <VideoWork id="picking" post={post} />
  )
}
