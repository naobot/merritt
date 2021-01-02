import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Introduction({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
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
    <>
      <Section id="exhibition-intro-i">
        <div
          className="text-container"
          >
          <div 
            className="text-content" 
            style={{ opacity: 0 }}
            >
            <p>Merritt Johnson’s artistic practice navigates the spaces between bodies and the body politic,
            land, and culture. Deeply invested in Indigenous self-determination and informed by
            necessity, her works foreground the urgency of socio-political transformation. Love Song, an
            online exhibition and artist’s publication, confronts the violence of cis-hetero patriarchy,
            environmental exploitation, and white supremacy through the articulation of practice and the
            building of armatures that dismantle these logics.</p>

            <p><em>Love Song</em> collects a selection of videos from Johnson’s ongoing Exorcising America series,
            each engaging with an aspect of how the so-called Americas manifest sickness,
            and exert control and violence over land and bodies. Love Song also documents the artist’s
            sculptural practice, specifically as activated through her material interventions into different
            kinds of technological apparatuses, proposing an amalgamation between different ways of
            knowing and being.</p>
          </div>
        </div>
      </Section>
      <Section id="exhibition-intro-ii">
        <div
          className="text-container"
          >
          <div 
            className="text-content" 
            style={{ opacity: 0 }}
            >
            <p>A good love song marks a trajectory of desire, acknowledging the distance between what is and
            what could be. They are sometimes celebratory; sometimes sad or angry. The possibility of
            traversing the distances they mark requires an honest assessment of current conditions and it
            requires belief in the as yet unseen. To live in the space of a love song is to build up a
            community, however intimate or grand, around the possibility of feeling made flesh, of belief
            made manifest, of justice come to fruition. It is often a complicated place to be, but Johnson has some ideas about how to fortify ourselves for this labour.</p>

            <p>In the image above, <em>Mindset</em>, the sweetgrass headset offers temporary disconnection from toxic
            cultural surroundings, creating an imaginative space to envision ways to contribute to present
            and future realities that are rooted in connections to land.</p>

            <p>In the videos below, Johnson proposes that the work of social, political and personal change
            can begin from where one already is, with what one already has.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
