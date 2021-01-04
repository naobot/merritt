import React from "react"
import Img from "gatsby-image"

export default function Work(props) {
  return (
    <div id={props.id} className="work">
      <div 
        className="work-image"
        >
        <Img fluid={props.image.fluid} alt={props.post.frontmatter.title} />
      </div>
      <div
        className="work-desc"
        style={{ opacity: 0 }}
        >
        <h3 className="work-title" dangerouslySetInnerHTML={{ __html: props.post.frontmatter.title }} />
        <div 
          className="full-desc"
          dangerouslySetInnerHTML={{ __html: props.post.html }}
          />
        <div
          className="work-info"
          >
          <em>{props.post.frontmatter.title.replace(/(<([^>]+)>)/gi, "")}</em>.&nbsp;
          {props.post.frontmatter.info}.&nbsp;
          {props.post.frontmatter.credit}.
        </div>
      </div>
    </div>
  )
}
