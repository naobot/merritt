import React from "react"
import Section from "./section"
import Video from "./video"

export default function VideoWork(props) {
  const videoContainerId = props.id + "-work-container";
  const descContainerId = props.id + "-desc-container";
  return (
    <>
    <Section id={videoContainerId}>
      <Video 
        videoSrcURL={props.post.frontmatter.videoUrl}
        videoTitle={props.post.frontmatter.title}
      />
    </Section>
    <Section id={descContainerId}>
      <div className="video-desc">
        <h1>{props.post.frontmatter.title}</h1>
        <div className="full-desc">
          test test test
        </div>
        <div className="video-info">
          <em>{props.post.frontmatter.title}</em>,&nbsp;
          {props.post.frontmatter.info}.&nbsp;
          {props.post.frontmatter.credit}.
        </div>
      </div>
    </Section>
    </>
  )
}
