import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Introduction({ children }) {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/exhibition-intro/"}}) {
  //         edges {
  //           node {
  //             fileAbsolutePath
  //             id
  //             frontmatter {
  //               title
  //             }
  //             html
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // const post = data.allMarkdownRemark.edges[0].node;
  return (
    <>
    <Section id="intro-1">
      <div className="text-container">
        <div className="text-content">
          <p>Merritt Johnson’s artistic practice navigates the spaces between bodies and the body politic, land, and culture. Deeply invested in Indigenous self-determination and informed by necessity, her works foreground the urgency of socio-political transformation. <em>Love Song</em>, an online exhibition and artist’s publication, confronts the violence of cis-hetero patriarchy, environmental exploitation, and white supremacy through the articulation of practice and the building of armatures that dismantle these logics.</p>
          <p><em>Love Song</em> collects a selection of videos from Johnson’s ongoing <em>Exorcising America</em> series, each engaging with an aspect of how the so-called Americas manifest sickness, and exert control and violence over land and bodies. <em>Love Song</em> also documents the artist’s sculptural practice, specifically as activated through her material interventions into different kinds of technological apparatuses, proposing an amalgamation between different ways of knowing and being.</p>
        </div>
      </div>
    </Section>
    <Section id="intro-2">
      <div className="text-container">
        <div className="text-content">
          <p>Love songs are celebrations of love and loved ones. They also mark trajectories of desire,acknowledging the distance between what is and what could be. The title of the exhibition isdrawn from Johnson’s sculpture Love Song (translation basket), which speaks directly to the need to understand the beat of every heart as a love song, and the fundamental changes that translation and understanding can bring about in relationships. Taking a heartbeat as a love song — as a rhythm that sings connection — requires belief in more than we can see. To live in the space of a love song — a good one — is to honour and celebrate connection and community beyond who and what we know. It is to believe in feeling made flesh, of belief made manifest, of justice come to fruition. It is often a complicated place to be, but Johnson offers ideas about how to fortify ourselves for this labour: by rejecting control masquerading as love, and instead celebrating connection and interdependence.</p>
          <p>In the image above, the VR headset made from braided sweetgrass offers temporary disconnection from toxic cultural surroundings, creating an imaginative space to envision ways to contribute to present and future realities that are rooted in connections to land.</p>
          <p>In the videos below, Johnson proposes that the work of social, political, and personal change can begin from where one already is, with what one already has.</p> 
        </div>
      </div>
    </Section>
    </>
  )
}
