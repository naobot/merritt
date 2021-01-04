import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function DescriptiveSecond({ children }) {
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
    <Section id="desc-2-1">
      <div className="text-container">
        <div className="text-content">
          <p><em>Love Song (translation basket)</em>, the title work of this exhibition, is a tool for translating medicalized measurements of life and health into a love song. In linking the stethoscope with acts of translation, Johnson foregrounds the reparative potential of active listening:</p>

          <p><blockquote>“Stethoscopes are used by emergency medical workers in hospitals and at sites of state and police violence on Black and brown bodies. They are a listening tool for assessing and saving lives. The translation basket is a reminder that every heartbeat is a precarious love song with an inevitable end. Failure to recognize, value, honour, and protect these songs and the bodies who sing them has been instrumental in building violent, white supremacist, and anthropocentric cultures, governments, and individuals. The translation basket is a container to remedy these disconnections.”</blockquote></p>
        </div>
      </div>
    </Section>
    <Section id="desc-2-2">
      <div className="text-container">
        <div className="text-content">
          <p>Other strategies for survival can work in complement with these life-saving technologies, such as those outlined in the final episodes of the <em>Exorcising America</em> series included here. In <em>Picking Yourself Up</em>, Johnson considers how to get a body up off the ground as much as she suggests tactics for recovering from trauma. In <em>Visibility Exercises</em>, she delineates how to make oneself seen in a landscape, and she shares strategies for being recognized as fully human in violent and disrespectful circumstances. What she makes abundantly clear is that the structures of settler colonialism, cis-hetero patriarchy, environmental exploitation, and white supremacy are wily, changing their tactics to enforce, maintain, and justify control and oppression. Revolution will come, and it will require adaptive and mutable strategies, passed through communities of shared concern, practiced here and now.</p> 
        </div>
      </div>
    </Section>
    <Section id="desc-2-3">
      <div className="text-container">
        <div className="text-content">
          <p>Embedded within the yearning of any love song is a shadow acknowledgement of the end of all things. The song ends, as do the lives of the singer and the subject, as will systems of dispossession, violence and oppression. Merritt’s Johnson’s <em>Love Song</em> celebrates resilience, connection, and belief in the possibility of alternatives for the present and future.</p> 
          <p>Below, with <em>Fancy Shawl for the frontlines</em>, Johnson celebrates this labour, creating a kind of armour for those people — Indigenous women in particular — who are showing up and doing the work of protecting the land and remaking the world in a good way.</p>
        </div>
      </div>
    </Section>
    </>
  )
}
