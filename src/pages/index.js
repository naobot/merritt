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
    // make Exhibition Intro description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#intro-1.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#intro-1 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#intro-1.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#intro-1 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Exhibition Intro description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#intro-1 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#intro-1.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Exhibition Intro description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#intro-2.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#intro-2 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#intro-2.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#intro-2 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Exhibition Intro description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#intro-2 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#intro-2.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end CURATORIAL TEXT EFFECTS */

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

  /* DISAPPEARING EFFECTS */
    // make Disappearing video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#disappearing-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#disappearing-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#disappearing-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#disappearing-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // make Disappearing description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#disappearing-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#disappearing-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#disappearing-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#disappearing-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Disappearing description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#disappearing-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#disappearing-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end DISAPPEARING EFFECTS */

  /* FALL EFFECTS */
    // make Fall video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#fall-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#fall-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#fall-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#fall-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // make Fall description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#fall-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#fall-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#fall-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#fall-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Fall description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#fall-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#fall-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end FALL EFFECTS */

  /* CONDITIONING EFFECTS */
    // make Conditioning video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#conditioning-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#conditioning-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#conditioning-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#conditioning-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // make Conditioning description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#conditioning-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#conditioning-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#conditioning-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#conditioning-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Conditioning description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#conditioning-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#conditioning-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end CONDITIONING EFFECTS */

  /* PICKING UP EFFECTS */
    // make Picking Up video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#picking-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#picking-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#picking-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#picking-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // make Picking Up description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#picking-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#picking-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#picking-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#picking-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Picking Up description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#picking-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#picking-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end PICKING UP EFFECTS */

  /* VISIBILITY EFFECTS */
    // make Visibility video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#visibility-work-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#visibility-work-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#visibility-work-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#visibility-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // make visibility Up description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#visibility-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#visibility-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#visibility-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            pin: element.querySelector("#visibility-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in visibility Up description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#visibility-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#visibility-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=800",
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end VISIBILITY EFFECTS */

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

      <Disappearing />

      <Fall />

      <Basket />

      <Conditioning />

      <LoveSong />

      <PickingUp />

      <Visibility />

      <Shawl />
    </div>
)}
