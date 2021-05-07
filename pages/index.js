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
        console.log("error", error)
        console.log("body", body)
        console.log("status_code", status_code)
        console.log("headers", headers)

        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(body.data)
      },
    )
  })

  // fetch team

  // fetch clients

  // pass to props below
  return {
    props: { videolist, carouselclips },
    revalidate: 3600,
  }
}

import { NavBar } from "../components/Nav"
import Works from "../components/sections/Works"
import About from "../components/sections/About"
import Foundation from "../components/sections/Foundation"
import WhatWeDo from "../components/sections/WhatWeDo"
import People from "../components/sections/People"
import ExtendedFam from "../components/sections/ExtendedFam"
import WorkedWith from "../components/sections/WorkedWith"
import Contact from "../components/sections/Contact"
import WorkModal from "../components/WorkModal"

// import styles from "../styles/globals.module.css"
export default function Home(props) {
  const { videolist, carouselclips, roster, clients } = props
  return (
    // <body style={styles.body}>
    <body>
      <NavBar />
      {/* <main style={styles.main}> */}
      <main>
        {/* sections */}
        {/* <Carousel carouselclips onWatch /> */}
        <Works videolist />
        <About />
        <Foundation />
        <WhatWeDo />
        <People roster />
        <ExtendedFam roster />
        <WorkedWith clients />
        <Contact />

        {/* modal logic */}
        <WorkModal />
      </main>
    </body>
  )
}
