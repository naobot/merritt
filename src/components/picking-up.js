import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"
import Video from "./video"

export default function PickingUp() {
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
    <Section>
      <div id="picking-up" className="work video-work">
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
        </div>
        <div 
          className="work-desc"
          data-sal="slide-up" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <h6 className="work-title">{post.frontmatter.title}</h6>
          <p>{post.frontmatter.info}. {post.frontmatter.credit}.</p>
        </div>
      </div>
    </Section>
  )
}
