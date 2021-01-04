import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Biography({ children }) {
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
    <Section id="bio">
      <div className="text-container">
        <div className="text-content">
          <p><strong>Merritt Johnson</strong> is a multidisciplinary artist and mother. She holds a BFA from Carnegie Mellon University (Pittsburgh) and an MFA from the Massachusetts College of Art and Design (Boston). The multiplicity of materials and processes Johnson employs embody her multiplicity; navigating agency, layering, and allegiance to land, water, and culture.  Her ancestry is a mix of Kanien’keha:ká (Mohawk), Irish, Blackfoot, Jamaican, and Swedish; she is not a citizen of any of the nations from which she descends. She has exhibited throughout the Americas and in Europe.</p>
          <p className="text-center">
            ▸&nbsp;<a href="http://www.flashbanggiveaway.com" target="_blank">www.flashbanggiveaway.com</a>
          </p>
          <p>The artist wishes to thank her partner Nicholas Galanin, her children, her family and friends (past, present and future), all the artists whose shoulders she stands on, the curators and administrators who have supported her work, her gallery Accola Griefen Fine Art, SFU Galleries, and all those who are working to abolish racism, sexism, homophobia, xenophobia, violence, and oppression. Nia:wen kowa / thank you for your love, support, and vision.</p>
        </div>
      </div>
    </Section>
  )
}
