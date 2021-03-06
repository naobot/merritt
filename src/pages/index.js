import React, { useRef, useEffect } from "react"
import { isMobile } from "react-device-detect"

import Helmet from "react-helmet"
import Landing from "../components/landing"
import Mindset from "../components/mindset"
import Introduction from "../components/introduction"
import Disappearing from "../components/disappearing"
import Fall from "../components/fall"
import DescriptiveZero from "../components/descriptivezero"
import DescriptiveFirst from "../components/descriptivefirst"
import DescriptiveSecond from "../components/descriptivesecond"
import Basket from "../components/basket"
import Conditioning from "../components/conditioning"
import LoveSong from "../components/lovesong"
import PickingUp from "../components/picking-up"
import Visibility from "../components/visibility"
import Shawl from "../components/shawl"
import Biography from "../components/biography"
import Credits from "../components/credits"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

export default function Home() {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const debouncedHandleResize = debounce(function handleResize() {
        // setDimensions({
        //   height: window.innerHeight,
        //   width: window.innerWidth
        // });
        if (!isMobile) { window.location.reload(false); }
      }, 500);

      window.addEventListener('resize', debouncedHandleResize);
      return _ => {
        window.removeEventListener('resize', debouncedHandleResize);
      }
    }
  }, []);

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
            // invalidateOnRefresh: true,
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
            scrub: false,
            start: "0",
            end: "+=300",
            // invalidateOnRefresh: true,

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
            // invalidateOnRefresh: true,
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
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end CURATORIAL TEXT EFFECTS */

  /* DESCRIPTIVE 0 TEXT EFFECTS */
    // make Descriptive 0-1 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-0-1.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-0-1 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-0-1.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-0-1 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 0-1 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-0-1 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-0-1.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Descriptive 0-2 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-0-2.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-0-2 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-0-2.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-0-2 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 0-2 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-0-2 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-0-2.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end DESCRIPTIVE 0 TEXT EFFECTS */

  /* DESCRIPTIVE 1 TEXT EFFECTS */
    // make Descriptive 1-1 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-1-1.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-1-1 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-1-1.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-1-1 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 1-1 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-1-1 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-1-1.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Descriptive 1-2 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-1-2.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-1-2 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-1-2.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-1-2 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 1-2 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-1-2 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-1-2.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end DESCRIPTIVE 1 TEXT EFFECTS */

  /* DESCRIPTIVE 2 TEXT EFFECTS */
    // make Descriptive 2-1 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-2-1.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-1 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-2-1.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-2-1 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 2-1 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-2-1 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-1.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Descriptive 2-2 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-2-2.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-2 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-2-2.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-2-2 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 2-2 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-2-2 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-2.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make Descriptive 2-3 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#desc-2-3.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-3 .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#desc-2-3.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#desc-2-3 .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 2-3 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#desc-2-3 .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#desc-2-3.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end DESCRIPTIVE 2 TEXT EFFECTS */

  /* BIO TEXT EFFECTS */
    // make Descriptive 2-1 description sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#bio.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#bio .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#bio.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#bio .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Descriptive 2-1 description
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#bio .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#bio.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end BIO TEXT EFFECTS */

  /* mindset EFFECTS */
    // make mindset video sticky
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#mindset-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in mindset video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#mindset-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make mindset video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#mindset-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#mindset-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#mindset-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in mindset video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#mindset-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#mindset-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end mindset EFFECTS */

  /* basket EFFECTS */
    // make basket video sticky
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#basket-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in basket video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#basket-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make basket video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#basket-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#basket-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#basket-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in basket video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#basket-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#basket-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end basket EFFECTS */

  /* lovesong EFFECTS */
    // make lovesong video sticky
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#lovesong-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in lovesong video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#lovesong-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make lovesong video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#lovesong-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#lovesong-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#lovesong-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in lovesong video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#lovesong-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#lovesong-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end lovesong EFFECTS */

  /* shawl EFFECTS */
    // make shawl video sticky
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#shawl-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in shawl video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#shawl-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
    // make shawl video sticky
    useEffect(() => {
      const element = ref.current;
      gsap.to(
        element.querySelector("#shawl-desc-container.sticky-bounding-box"),
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl-desc-container .sticky-element"),
            scrub: true,
            start: "center center",
            endTrigger: element.querySelector("#shawl-desc-container.sticky-bounding-box"),
            end: "bottom bottom",
            // invalidateOnRefresh: true,
            pin: element.querySelector("#shawl-desc-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in shawl video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#shawl-desc-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#shawl-desc-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end shawl EFFECTS */

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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#disappearing-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Disappearing video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#disappearing-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#disappearing-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#fall-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Fall video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#fall-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#fall-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#conditioning-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Conditioning video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#conditioning-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#conditioning-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#picking-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Picking Up video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#picking-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#picking-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
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
            // invalidateOnRefresh: true,
            pin: element.querySelector("#visibility-work-container .sticky-element"),
          }
        }
      );
    }, []);
    // fade in Visibility video
    useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector("#visibility-work-container .sticky-element"),
        {
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: element.querySelector("#visibility-work-container.sticky-bounding-box"),
            scrub: true,
            start: "+=200",
            end: "+=450",
            // invalidateOnRefresh: true,
          },
          opacity: 1,
          ease: "power3.inOut",
        }
      );
    }, []);
  /* end VISIBILITY EFFECTS */

  return (
    <div className="main-container" ref={ref}>
      <Helmet>
        <title>Love Song - Merritt Johnson</title>
      </Helmet>

      <Landing />

      <Mindset />

      <Introduction />

      <Disappearing />

      <Fall />

      <DescriptiveZero />

      <Basket />

      <Conditioning />

      <DescriptiveFirst />

      <LoveSong />

      <PickingUp />

      <Visibility />

      <DescriptiveSecond />

      <Shawl />

      <Biography />
      <Credits />
    </div>
)}
