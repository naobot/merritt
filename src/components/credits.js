import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"

export default function Credits({ children }) {
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
    <Section id="credits">
      <div className="text-container">
        <div className="text-content">
          <p>As part of this exhibition, the artist’s publication Exorcising America: Conditioning Exercises is published by SFU Galleries in an edition of 500. To receive a copy, please email <a href="mailto:sfugallery@sfu.ca">sfugallery@sfu.ca</a> with your mailing address.</p>
          <p className="credit-lines">
            Publication design: Vicky Lum <br/>
            Publication illustrations: Francisco-Fernando Granados<br/>
            Printing: Linx Print, Vancouver
          </p>
          <p className="credit-lines">
            Website development: Naomi Cui <br/>
            Image descriptions: Cheryl Green
          </p>
          <p>© All images and texts copyright of the artists and SFU Galleries, 2020. All rights reserved. No part of this website may be reproduced or transmitted in any form by any means without the permission of the publisher.</p>
          <p>
            SFU Galleries<br/>
            AQ3004, Simon Fraser University<br/>
            8888 University Drive<br/>
            Burnaby BC V5A 1S6 Canada
          </p>
          <p><a href="http://www.sfugalleries.ca">www.sfugalleries.ca</a></p>
        </div>
      </div>
    </Section>
  )
}
