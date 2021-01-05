import React from "react"
import Img from "gatsby-image"
import Section from "./section"

export default function Work(props) {
  const containerId = props.id + "-work-container";
  const descriptionId = props.id + "-desc-container";
  return (
    <>
      <Section id={containerId}>
        <div className="work">
          <div 
            className="work-image"
            >
            <Img fluid={props.image.fluid} alt={props.post.frontmatter.title} />
          </div>
        </div>
      </Section>
      <Section id={descriptionId}>
          <div
            className="work-desc"
            >
            <h3 className="work-title" dangerouslySetInnerHTML={{ __html: props.post.frontmatter.title }} />
            <div 
              className="full-desc"
              dangerouslySetInnerHTML={{ __html: props.post.html }}
              />
            <div
              className="work-info"
              >
              <em>{props.post.frontmatter.title.replace(/(<([^>]+)>)/gi, "")}</em>,&nbsp;
              {props.post.frontmatter.info}.&nbsp;
              {props.post.frontmatter.credit}.
            </div>
          </div>
      </Section>
    </>
  )
}
