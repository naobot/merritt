import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <div className="main-container">
      <section className="section">
        <div className="landing-title"
          data-sal="fade" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <h1>Merritt Johnson</h1>
        </div>
      </section>

      <section className="section work-section">
        <div 
          className="work-image" 
          data-sal="fade" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <div 
          className="work-desc"
          data-sal="slide-up" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <h6 className="work-title" >Mindset (sweetgrass)</h6>
          <p>Modeled on equipment for virtual reality, this headset provides visual and olfactory experience rooted in land. Sweetgrass has provided good mindsets for generations, connecting land, spirit and intention. VR headset technology offers disconnection from surroundings for immersive experience separated from reality. Worn by a baby, the photograph speaks to how we shape our children’s mindsets. The sweetgrass headset offers temporary disconnection from toxic cultural surroundings, for envisioning good ways to create and contribute to present and future realities.</p>
        </div>
      </section>

      <section className="section">
        <div 
          className="section-text"
          data-sal="slide-up" 
          data-sal-delay="100"
          data-sal-duration="600"
          data-sal-easing="ease-in-out-quad"
          >
          <h2>Text here</h2>
          <p>Duis maximus metus eu dolor facilisis, a lobortis neque aliquet. Nunc fringilla euismod lorem, non ullamcorper ex. Proin blandit metus nec nunc consequat tempus. Etiam non lectus viverra, efficitur quam at, hendrerit dui. Sed ullamcorper rutrum diam at euismod. Cras urna odio, rhoncus in tristique at, sagittis rutrum justo. Pellentesque in congue justo. Fusce porta, sem vitae interdum convallis, tellus risus mollis ligula, ac convallis nibh neque sed lectus. Vivamus ornare ipsum et congue varius.</p>
          <p>Nullam nec diam at nunc efficitur sollicitudin. Cras congue iaculis pellentesque. Suspendisse eget leo in neque feugiat semper et vel dolor. Vestibulum blandit ipsum a lorem feugiat tincidunt. Vivamus non arcu quis risus euismod iaculis in vitae ipsum. Phasellus aliquet gravida laoreet. In hac habitasse platea dictumst. </p>
          <p>Aliquam euismod erat vitae euismod efficitur. Nullam felis libero, blandit non pretium in, finibus sed sapien. Aenean dapibus ante quis sem interdum vestibulum. Integer consectetur ullamcorper dapibus. Suspendisse mi justo, rutrum id venenatis eget, suscipit ac libero. Maecenas ac scelerisque ante, vel vulputate sapien. Ut ante leo, convallis at lorem non, finibus consectetur nisi. Donec at orci molestie, dictum eros vitae, lacinia tellus. Praesent sit amet dui risus. Nulla lobortis porta elit, sed scelerisque augue dignissim eget.</p>
        </div>
      </section>
    </div>
)}

export const query = graphql`
query MyQuery {
  file(name: {regex: "/Mindset/"}) {
    id
    childImageSharp {
      fixed(jpegProgressive: true, width: 600) {
        base64
        tracedSVG
        aspectRatio
        srcWebp
        srcSetWebp
        originalName
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`