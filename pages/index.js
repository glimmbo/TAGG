import { vimeoClient, TAGG_ID } from "../vimeo"

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
// at most once every hour
export async function getStaticProps(context) {
  // fetch carousel clips
  let carouselclips = []

  // fetch list of works videos
  const videolist = await new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: "GET",
        path: `/users/${TAGG_ID}/videos`,
        userId: TAGG_ID,
      },
      (error, body, status_code, headers) => {
        // console.log("error", error)
        // console.log("body", body)
        // console.log("status_code", status_code)
        // console.log("headers", headers)

        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(body.data)
      },
    )
  })

  // fetch clients
  const clients = ["dude1", "dude2"]

  // pass to props below
  return {
    props: { carouselclips, videolist, clients },
    revalidate: 3600,
  }
}

import { NavBar } from "../components/Nav"
import Works from "../components/sections/Works"
import WhoWeAre from "../components/sections/WhoWeAre"
import Foundation from "../components/sections/Foundation"
import WhatWeDo from "../components/sections/WhatWeDo"
import People from "../components/sections/People"
import ExtendedFam from "../components/sections/ExtendedFam"
import WorkedWith from "../components/sections/WorkedWith"
import Contact from "../components/sections/Contact"
import WorkModal from "../components/WorkModal"

export default function Home({ carouselclips, videolist, team, clients }) {
  return (
    <>
      <NavBar />
      <main>
        {/* sections */}
        {/* <Carousel carouselclips={carouselclips} onWatch /> */}
        {/* <Works videolist={videolist} /> */}
        <WhoWeAre />
        {/* <Foundation /> */}
        {/* <WhatWeDo /> */}
        {/* <People /> */}
        {/* <ExtendedFam /> */}
        {/* <WorkedWith /> */}
        {/* <Contact /> */}

        {/* modal logic */}
        {/* <WorkModal /> */}
      </main>
    </>
  )
}
