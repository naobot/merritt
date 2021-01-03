import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function DescriptiveFirst({ children }) {
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
    <Section id="desc-1-1">
      <div className="text-container">
        <div className="text-content">
          <p>Made in 2019, <em>Forest Seed Basket for present and future understanding, Black Ash</em> is, from our current vantage point, an unnervingly prescient work, prefiguring a pandemic illness whose lethal force is rooted in the lungs, in the struggle to take in breath. This work transforms an oxygen tank into a container for collecting seeds. Through the intervention of black ash on the conventionally metal form, <em>Forest Seed Basket for present and future understanding, Black Ash</em> links the literal lungs of the earth to the mechanical assistance needed by many to promote healing or enable survival. This relationship builds upon the interdependence that is foundational to the mutual flourishing of land and bodies.</p>
        </div>
      </div>
    </Section>
    <Section id="desc-1-2">
      <div className="text-container">
        <div className="text-content">
          <p>This proposition, that survival is a state that is laboured for and tended to, is taken up again <em>Exorcising America: Conditioning Exercises</em>. Commissioned for this exhibition, this video references resistance-based workouts to insist that strength and power are not synonymous, and that conditioning for strength is necessary to dismantle power. In productively conflating physical, emotional, mental, and spiritual exercise, <em>Exorcising America: Conditioning Exercises</em> explores co-existence and interdependence as it plays out over a range of phenomena, from social justice to climate justice. What does it mean to condition oneself for the world? For Johnson, it requires a stamina to persist through violent and oppressive practices enacted upon bodies because of their gender, race, and / or sexuality, yet always avoiding the trap of dominance. Significantly, <em>Exorcising America: Conditioning Exercises</em> proposes we use our own body weight for conditioning, with the implications that we can begin with ourselves and all the weight of violence and oppression that our bodies carry. The point is not how the physical exercises themselves are performed, but rather that engagement extends to all bodies, that <em>every body</em> can work to interrupt and abolish the violence and oppression enacted by extractive capitalist states on land and life.</p> 
        </div>
      </div>
    </Section>
    </>
  )
}
