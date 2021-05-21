import { getClipsMobile, getClipsDesktop, getWorks } from "../vimeo"

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// at most once every hour
export async function getStaticProps(context) {
  const videoList = await getWorks()
  const clipListMobile = await getClipsMobile()
  const clipListDesktop = await getClipsDesktop()

  // TODO: get client list

  // pass to props below
  return {
    props: { videoList, clipListMobile, clipListDesktop },
    revalidate: 60,
  }
}

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
import WorkModal from "../components/WorkPage"

export default function Home({ videoList, clipListMobile, clipListDesktop }) {
  console.log(videoList, clipListMobile, clipListDesktop)
  return (
    <>
      <NavBar />
      <main>
        {/* sections */}
        <Carousel clipListMobile={clipListMobile} />
        <Works videoList={videoList} />
        <WhoWeAre />
        <Foundation />
        <WhatWeDo />
        <People />
        <ExtendedFam />
        <WorkedWith />
        <Contact />

        {/* modal logic */}
        {/* <WorkModal /> */}
      </main>
    </>
  )
}
