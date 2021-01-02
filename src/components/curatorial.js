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
    <Section id="intro">
      <div className="text-container">
        <div className="text-content">
          <p>Merritt Johnson’s artistic practice navigates the spaces between bodies and the body politic, land, and culture. Deeply invested in Indigenous self-determination and informed by necessity, her works foreground the urgency of socio-political transformation. Love Song, an online exhibition and artist’s publication, confronts the violence of cis-hetero patriarchy, environmental exploitation, and white supremacy through the articulation of practice and the building of armatures that dismantle these logics.</p>
          <p><em>Love Song</em> collects a selection of videos from Johnson’s ongoing Exorcising America series, each engaging with an aspect of how the so-called Americas manifest sickness, and exert control and violence over land and bodies. Love Song also documents the artist’s sculptural practice, specifically as activated through her material interventions into different kinds of technological apparatuses, proposing an amalgamation between different ways of knowing and being.</p>
        </div>
      </div>
    </Section>
  )
}
