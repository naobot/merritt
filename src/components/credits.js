import React from "react"
import Section from "./section"
import { useStaticQuery, graphql } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

import SFUGLogo from "../../static/SFUGalleries.Logo.Black.svg"
import CCLogo from "../../static/CanadaCouncilLogo_e_l.svg"
import BCACLogo from "../../static/BCArtsCouncil.svg"

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
    <div id="credits" className="section">
      <div className="text-container">
        <div className="text-content">
          <p>As part of this exhibition, the artist’s publication <a onClick={() => scrollTo("#intro-1")} className="dotted-line"><em>Exorcising America: Conditioning Exercises</em></a> is published by SFU Galleries in an edition of 500. To receive a copy, please email <a href="mailto:sfugallery@sfu.ca">sfugallery@sfu.ca</a> with your mailing address.</p>
          <p className="credit-lines">
            <span className="small-caps">Publication design:</span> Vicky Lum <br/>
            <span className="small-caps">Publication illustrations:</span> Francisco-Fernando Granados<br/>
            <span className="small-caps">Printing:</span> Linx Print, Vancouver
          </p>
          <p className="credit-lines">
            <span className="small-caps">Website development:</span> Naomi Cui <br/>
            <span className="small-caps">Image descriptions:</span> Cheryl Green
          </p>
          <p>© All images and texts copyright of the artists and SFU Galleries, 2020. All rights reserved. No part of this website may be reproduced or transmitted in any form by any means without the permission of the publisher.</p>
          <p>
            SFU Galleries<br/>
            AQ3004, Simon Fraser University<br/>
            8888 University Drive<br/>
            Burnaby BC V5A 1S6 Canada
          </p>
          <p>▸&nbsp;<a href="http://www.sfugalleries.ca" target="_blank">www.sfugalleries.ca</a></p>
          <p>
            <img className="logo" src={SFUGLogo} />
            <img className="logo" src={CCLogo} />
            <img className="logo" src={BCACLogo} />
          </p>
        </div>
      </div>
    </div>
  )
}
