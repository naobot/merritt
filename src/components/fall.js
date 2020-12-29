import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"
import Video from "./video"

export default function Fall() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/fall/"}}) {
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
    <Section>
      <div id="fall" className="work video-work">
        <div 
          className="work-video" 
          data-sal="fade" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <Video 
            videoSrcURL={post.frontmatter.videoUrl}
            videoTitle={post.frontmatter.title}
          />
          <div className="work-desc">
            <em>{post.frontmatter.title}</em>,&nbsp;
            {post.frontmatter.info}.&nbsp;
            {post.frontmatter.credit}.
          </div>
        </div>
      </div>
    </Section>
  )
}