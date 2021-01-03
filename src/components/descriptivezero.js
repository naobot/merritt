import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function DescriptiveZero({ children }) {
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
    <Section id="desc-0-1">
      <div className="text-container">
        <div className="text-content">
          <p>Drawn from Johnson’s extensive Exorcising America video series, <em>Disappearing Exercises</em> and <em>Taking a Fall</em> outline survival strategies that respond to our necessarily incomplete knowledge of the world around us. From the attempt to remove oneself from danger, to mitigating damage and injury when danger is encountered, these videos acknowledge the strange contortions that endurance sometimes necessitates.</p>
        </div>
      </div>
    </Section>
    <Section id="desc-0-2">
      <div className="text-container">
        <div className="text-content">
          <p>Modelled on amateur, do-it-yourself instructional exercise videos, and filmed within the artist’s home, the <em>Exorcising America</em> series confronts myriad systemic oppressions while acknowledging and celebrating the resilience and strength of resistance. The voiceover narration moves between literal descriptions of Johnson’s exercise movements to socio-political interpretations of her guided activities. In <em>Disappearing Exercises</em>, disappearance is willful and forced, a double bind that attempts protection from threat while removing visibility and representation. <em>Taking a Fall</em> engages with the idiom’s characteristic meaning, which references blame and punishment for someone else’s actions: she literally falls to the ground as a way of navigating the physical, emotional, and mental consequences of racism, sexism, and assimilation. The artist proposes that the modest practices outlined in these videos have profound implications. As she states, “these works do not suggest we exorcize something <em>from</em> America. These works reflect on how to exorcize America from the land, and everything living on it. America is the name of the demon, not the name of the land.”</p> 
        </div>
      </div>
    </Section>
    </>
  )
}
