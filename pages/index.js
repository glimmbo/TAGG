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
import {
  getMostRecentAnimatedThumb,
  getClipsMobile,
  getClipsDesktop,
  getWorks,
} from "../vimeo"
import { useState, useEffect } from "react"

export async function getStaticProps(context) {
  const clipsMobile = await getClipsMobile()
  const clipsDesktop = await getClipsDesktop()
  let videoList = await getWorks()

  for await (let video of videoList) {
    video["thumb"] = await getMostRecentAnimatedThumb(video.uri)
  }

  // TODO: get active client list from somewhere?

  return {
    props: { videoList, clipsMobile, clipsDesktop },
    revalidate: 60, //min
  }
}

export default function Home({
  videoList,
  clipsMobile,
  clipsDesktop,
  videoListThumbs,
}) {
  return (
    <>
      <NavBar />
      <main>
        {/* sections */}
        <Carousel clipsMobile={clipsMobile} clipsDesktop={clipsDesktop} />
        <Works videoList={videoList} thumbs={videoListThumbs} />
        {/* <WhoWeAre />
        <Foundation />
        <WhatWeDo />
        <People />
        <ExtendedFam />
        <WorkedWith />
        <Contact /> */}

        {/* modal logic */}
        {/* <WorkModal /> */}
      </main>
    </>
  )
}
