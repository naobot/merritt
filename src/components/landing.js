import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Landing({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )
  return (
      <div className="landing-title">
        <h1>{data.site.siteMetadata.title}:<br/>
        {data.site.siteMetadata.subtitle}</h1>
        <h3><div>Presented by&nbsp;</div><div>SFU Galleries</div></h3>
        <h3><div>Curated by&nbsp;</div><div>cheyanne turions</div></h3>
      </div>
  )
}
