import { NavBar } from "../components/Nav"
import Carousel from "../components/elements/Carousel"
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
import { useEffect } from "react"

// export async function getStaticProps(context) {
// Fetch all video content
// const clipsMobile = await getClipsMobile()
// const clipsDesktop = await getClipsDesktop()
// let videoList = await getWorks()
// console.log(clipsMobile)
// for await (let video of videoList) {
//   video["thumb"] = await getMostRecentAnimatedThumb(video.uri)
// }
// TEMP
// for (let step = 0; step < 7; step++) {
//   videoList.push(videoList[0])
// }
// return {
//   props: { videoList, clipsMobile, clipsDesktop },
//   revalidate: 60, //min
// }
// }

export default function Home({
  videoList,
  clipsMobile,
  clipsDesktop,
  videoListThumbs,
}) {
  // have a reactive css variable "--scrollpos" from 0 (top) to 100 (bottom)
  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame)
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params)
        })
      }
    }

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      // console.log(window.scrollY)
      let perc =
        (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
        100
      document.documentElement.setAttribute("style", `--scrollpos: ${perc}`)
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    })

    // Update scroll position for first time
    // storeScroll()
  }, [])

  // alter an element's style with scrollY
  // useEffect(() => {
  //   let didScroll = false
  //   let paralaxTitles = document.querySelectorAll(".paralax-title")

  //   const scrollInProgress = () => {
  //     didScroll = true
  //   }

  //   const raf = () => {
  //     if (didScroll) {
  //       // do something here
  //       didScroll = false
  //     }
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  //   window.addEventListener("scroll", scrollInProgress)
  // })
  return (
    <>
      <NavBar />
      <main>
        {/* sections */}
        {/* <Carousel clipsMobile={clipsMobile} clipsDesktop={clipsDesktop} /> */}
        <section style={{ height: "200vh" }}></section>
        {/* <Works videoList={videoList} thumbs={videoListThumbs} /> */}
        <WhoWeAre />
        <Foundation />
        <WhatWeDo />
        <People />
        <ExtendedFam />
        <WorkedWith />
        <Contact />
      </main>
    </>
  )
}
