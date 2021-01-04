import React from "react"
import Section from "./section"
import Video from "./video"

export default function VideoWork(props) {
  const videoContainerId = props.id + "-work-container";
  return (
    <Section id={videoContainerId}>
      <Video 
        videoSrcURL={props.post.frontmatter.videoUrl}
        videoTitle={props.post.frontmatter.title}
      />
      <div className="video-desc">
        <div className="video-info">
          <em>{props.post.frontmatter.title}</em>,&nbsp;
          {props.post.frontmatter.info}.&nbsp;
          {props.post.frontmatter.credit}.
        </div>
      </div>
    </Section>
  )
}
