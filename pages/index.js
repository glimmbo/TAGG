import { useState, useEffect, useRef, forwardRef, useMemo } from "react"
import { NavBar } from "../components/NavBar"
import ClipCarousel from "../components/elements/Carousel"
import Works from "../components/sections/Works"
import WhoWeAre from "../components/sections/WhoWeAre"
import Foundation from "../components/sections/Foundation"
import WhatWeDo from "../components/sections/WhatWeDo"
import People from "../components/sections/People"
import ExtendedFam from "../components/sections/ExtendedFam"
import WorkedWith from "../components/sections/WorkedWith"
import Contact from "../components/sections/Contact"
import {
  getMostRecentAnimatedThumb,
  getClipsMobile,
  getClipsDesktop,
  getWorks,
} from "../vimeo"
import { useInView } from "react-intersection-observer"

// Fetch all video content
export async function getStaticProps(context) {
  const clipsMobile = await getClipsMobile()
  // const clipsMobile = []
  const clipsDesktop = await getClipsDesktop()
  // const clipsDesktop = []

  // let videoList = []
  let videoList = await getWorks()
  for (let video of videoList) {
    video["thumb"] = await getMostRecentAnimatedThumb(video?.uri)
  }

  return {
    props: { videoList, clipsMobile, clipsDesktop },
    // revalidate: 60, // (sec) hovering thumbs causes revalidate?
  }
}

export default function Home({ videoList, clipsMobile, clipsDesktop }) {
  // Nav targeting
  const { ref: refCarousel, inView: inViewCarousel } = useInView()
  const {
    ref: refWorks,
    inView: inViewWorks,
    entry: entryWorks,
  } = useInView({ threshold: 0.25 })
  const { ref: refContact, inView: inViewContact } = useInView({
    threshold: 0.25,
  })

  return (
    <>
      <NavBar
        visibleSection={
          inViewCarousel || inViewWorks
            ? "works"
            : inViewContact
            ? "contact"
            : "about"
        }
      />
      <main>
        <section ref={refCarousel}>
          <ClipCarousel clipsMobile={clipsMobile} clipsDesktop={clipsDesktop} />
        </section>
        <Works videoList={videoList} id="works" ref={refWorks} />
        <WhoWeAre id="about" />
        <Foundation id="foundation" />
        <WhatWeDo id="whatwedo" />
        <People id="people" />
        <ExtendedFam id="extended-fam" />
        <WorkedWith id="worked-with" />
        <Contact id="contact" ref={refContact} />
      </main>
    </>
  )
}
