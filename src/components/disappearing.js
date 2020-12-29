import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"
import Video from "./video"

export default function Disappearing() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/disappearing/"}}) {
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
      <div id="disappearing" className="work video-work">
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
        <div className="work-desc">
          <div className="vertical-align">
            <h3>{post.frontmatter.title}</h3>
            <p>Work description here. Aliquam eget laoreet tortor. Aliquam vestibulum quam eget tortor vehicula, sit amet luctus massa lacinia. Quisque iaculis maximus tortor vel venenatis. Praesent efficitur mattis tincidunt. Vivamus convallis leo erat, et sagittis ligula sagittis quis. Aliquam erat volutpat. Aenean ut orci bibendum, cursus erat in, mollis nisl. Donec non mauris nulla. In volutpat diam lacinia tellus rutrum fermentum. Maecenas pretium libero eu urna elementum, sit amet cursus massa vestibulum. Phasellus tortor elit, facilisis ac vulputate non, efficitur eu dolor.</p>
            <div className="work-info">
              <em>{post.frontmatter.title}</em>,&nbsp;
              {post.frontmatter.info}.&nbsp;
              {post.frontmatter.credit}.
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
