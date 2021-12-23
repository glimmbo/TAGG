import { useState, useEffect, useRef, forwardRef } from "react"
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
  // const worksRef = useRef(null)
  // const aboutRef = useRef(null)
  // const foundationRef = useRef(null)
  // const whatwedoRef = useRef(null)
  // const peopleRef = useRef(null)
  // const extendedfamRef = useRef(null)
  // const workedwithRef = useRef(null)
  // const contactRef = useRef(null)

  // const sectionRefs = [
  //   { section: "works", ref: worksRef },
  //   { section: "about", ref: aboutRef },
  //   { section: "foundation", ref: foundationRef },
  //   { section: "whatwedo", ref: whatwedoRef },
  //   { section: "people", ref: peopleRef },
  //   { section: "extendedfam", ref: extendedfamRef },
  //   { section: "workedwith", ref: workedwithRef },
  //   { section: "contact", ref: contactRef },
  // ]

  // const getDimensions = (ele) => {
  //   const { height } = ele?.getBoundingClientRect()
  //   const offsetTop = ele?.offsetTop
  //   const offsetBottom = offsetTop + height

  //   return {
  //     height,
  //     offsetTop,
  //     offsetBottom,
  //   }
  // }

  // const [visibleSection, setVisibleSection] = useState()
  // const navRef = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { height: navHeight } = getDimensions(navRef.current)
  //     const scrollPosition = window.scrollY + navHeight

  //     console.log(scrollPosition)

  //     const selected = sectionRefs.find(({ section, ref }) => {
  //       const ele = ref.current
  //       if (ele) {
  //         const { offsetBottom, offsetTop } = getDimensions(ele)
  //         return scrollPosition > offsetTop && scrollPosition < offsetBottom
  //       }
  //     })

  //     if (selected && selected.section !== visibleSection) {
  //       console.log(selected)
  //       setVisibleSection(selected.section)
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [visibleSection])

  return (
    <>
      <NavBar />
      <main>
        <ClipCarousel clipsMobile={clipsMobile} clipsDesktop={clipsDesktop} />
        <Works videoList={videoList} id="works" />
        <WhoWeAre id="about" />
        <Foundation id="foundation" />
        <WhatWeDo id="whatwedo" />
        <People id="people" />
        <ExtendedFam id="extended-fam" />
        <WorkedWith id="worked-with" />
        <Contact id="contact" />
      </main>
    </>
  )
}
