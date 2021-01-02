import React, { useRef, useEffect } from "react"

import Landing from "../components/landing"
import Mindset from "../components/mindset"
import Introduction from "../components/introduction"
import Disappearing from "../components/disappearing"
import Fall from "../components/fall"
import Basket from "../components/basket"
import Conditioning from "../components/conditioning"
import LoveSong from "../components/lovesong"
import PickingUp from "../components/picking-up"
import Visibility from "../components/visibility"
import Shawl from "../components/shawl"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.from(
      element.querySelector(".landing-title"),
      {
        opacity: 0,
        y: 100,
        ease: "power1.inOut",
        duration: 1.5,
        delay: 0.2
      }
    );
    gsap.from(
      element.querySelector(".work-desc"),
      {
        opacity: 0,
      }
    );
  }, []);

  /* CURATORIAL TEXT EFFECTS */
    // make Exhibition Intro I sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#exhibition-intro-i.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#exhibition-intro-i .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#exhibition-intro-i.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#exhibition-intro-i .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Exhibition Intro I description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#exhibition-intro-i .text-content"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#exhibition-intro-i .text-content"),
            scrub: true,
            start: "top center",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Exhibition Intro II sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#exhibition-intro-ii.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#exhibition-intro-ii .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#exhibition-intro-ii.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#exhibition-intro-ii .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Exhibition Intro II description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#exhibition-intro-ii .text-content"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#exhibition-intro-ii .text-content"),
            scrub: true,
            start: "top center",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end CURATORIAL TEXT EFFECTS */

  // /* CURATORIAL TEXT EFFECTS */
  //   // make Exhibition Intro I sticky
  //   useEffect(() => {
  //     const element = ref.current;
  //     let tl = gsap.timeline({
  //       delay: 0.5,
  //       scrollTrigger: {
  //         trigger: element.querySelector("#exhibition-intro-i .sticky-element"),
  //         start: "center center",
  //         end: "bottom bottom",
  //         scrub: true,
  //         markers: true, 
  //         toggleActions: "play reverse play reverse",
  //       }
  //     });
  //     tl
  //       .to(
  //           element.querySelector("#exhibition-intro-i.sticky-bounding-box"),
  //           { opacity: 1, duration: 2, }
  //         )
  //       .to(
  //           element.querySelector("#exhibition-intro-i.sticky-bounding-box"),
  //           { opacity: 0, duration: 2 },
  //           1
  //         )
  //     ;
  //   }, []);
  // /* end CURATORIAL TEXT EFFECTS */

  /* MINDSET EFFECTS */
    // make Mindset sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#mindset-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#mindset-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#mindset-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // adjust Mindset position
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#mindset .work-image"),
        {
          scale: 0.5,
          x: -90,
          y: -120
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset.work"),
            scrub: true,
            start: "+=100",
            end: "+=800",
          },
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3.inOut",
        }
      );
    }, []);
    // fade in Mindset description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#mindset .work-desc"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset.work"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end MINDSET EFFECTS */

  /* BASKET EFFECTS */
    // make Basket sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#basket-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#basket-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#basket-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // adjust Basket position
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#basket .work-image"),
        {
          scale: 0.5,
          x: 240,
          y: 5
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket.work"),
            scrub: true,
            start: "+=100",
            end: "+=800",
          },
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3.inOut",
        }
      );
    }, []);
    // fade in Basket description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#basket .work-desc"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket.work"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end BASKET EFFECTS */

  /* LOVESONG EFFECTS */
    // make Lovesong sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#lovesong-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#lovesong-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#lovesong-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // adjust Lovesong position
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#lovesong .work-image"),
        {
          scale: 0.5,
          x: 190,
          y: 205
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong.work"),
            scrub: true,
            start: "+=100",
            end: "+=800",
          },
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3.inOut",
        }
      );
    }, []);
    // fade in Lovesong description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#lovesong .work-desc"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong.work"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end LOVESONG EFFECTS */

  /* SHAWL EFFECTS */
    // make Shawl sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#shawl-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#shawl-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#shawl-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // adjust Shawl position
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#shawl .work-image"),
        {
          scale: 0.5,
          x: 30,
          y: 155
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl.work"),
            scrub: true,
            start: "+=100",
            end: "+=800",
          },
          scale: 1,
          x: 0,
          y: 0,
          ease: "power3.inOut",
        }
      );
    }, []);
    // fade in Shawl description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#shawl .work-desc"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl.work"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end SHAWL EFFECTS */

  // // fade in video
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(
  //     element.querySelector("#disappearing .video-container"),
  //     {
  //       opacity: 0,
  //       // y: 100,
  //       ease: "power1.inOut",
  //       duration: 1.5,
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: element.querySelector("#disappearing .video-container"),
  //         scrub: false,
  //         start: "center center",
  //       },
  //     }
  //   );
  // }, []);
  // // sticky video
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.to(
  //     element.querySelector("#disappearing .video-element .element-container"),
  //     {
  //       scrollTrigger: {
  //         trigger: element.querySelector("#disappearing .video-container"),
  //         scrub: true,
  //         start: "center center",
  //         endTrigger: element.querySelector("#disappearing .video-element .element-container"),
  //         end: "bottom bottom",
  //         pin: element.querySelector("#disappearing .video-element .sticky-element"),
  //       }
  //     }
  //   );
  // }, []);
  // // fade in video desc
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(
  //     element.querySelector("#disappearing .work-desc"),
  //     {
  //       opacity: 0,
  //       y: 100,
  //       ease: "power1.inOut",
  //       duration: 1.5,
  //       delay: 0.8,
  //       scrollTrigger: {
  //         trigger: element.querySelector("#disappearing .description-element .element-container"),
  //         scrub: false,
  //         start: "top top",
  //         end: "bottom center",
  //       },
  //     }
  //   );
  // }, []);
  // // sticky video desc
  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.to(
  //     element.querySelector("#disappearing .description-element .element-container"),
  //     {
  //       scrollTrigger: {
  //         trigger: element.querySelector("#disappearing .description-element .element-container"),
  //         scrub: true,
  //         markers: true,
  //         start: "top top",
  //         endTrigger: element.querySelector("#disappearing"),
  //         end: "bottom bottom",
  //         pin: element.querySelector("#disappearing .description-element .sticky-element"),
  //       }
  //     }
  //   );
  // }, []);

  // const content = <>   
  //     <Curatorial />
  //     <Disappearing />
  //     <Fall />   
  //     <Curatorial />
  //     <Basket />
  //     <Conditioning />
  //     <Curatorial />
  //     <LoveSong />
  //     <PickingUp />
  //     <Visibility />
  //     <Shawl /></>;
  return (
    <div className="main-container" ref={ref}>

      <Landing />

      <Mindset />

      <Introduction />

      <Basket />

      <LoveSong />

      <Shawl />
    </div>
)}
