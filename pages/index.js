import Head from "next/head"
import Link from "next/link"
import { NavBar } from "../components/Nav"
import { vimeoClient, TAGG_ID } from "../vimeo"
import styles from "../styles/Home.module.css"

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(context) {
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

  // fetch carousel clips
  let carouselclips = []

  // receive as props below
  return {
    props: { videolist, carouselclips },
    revalidate: 60,
  }
  // Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every minute
}

export default function Home(props) {
  const { videolist, carouselclips } = props
  return (
    <>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="images/favicon/favicon.ico" />
      </Head>

      <main>
        {videolist.map((video, i) => {
          return (
            <Link href={`/works${video.uri}`} key={i}>
              <a style={{ color: "white" }} key={i}>
                {video.name}
              </a>
            </Link>
          )
        })}
        {/* Clip Carousel clips from /public or vimeo */}
        <h1 id="works" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          Featured Projects
        </h1>
        {/* Featured Projects videolist={videolist}*/}
        <h1 id="about" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          Who We Are
        </h1>
        {/* Who We Are roster*/}
        <h1 id="" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          People
        </h1>
        {/* People */}
        <h1 id="" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          Extended Family
        </h1>
        {/* Extended Family */}
        <h1 id="" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          Worked With
        </h1>
        {/* Worked With */}
        <h1 id="contact" style={{ fontFamily: "Montserrat", margin: "30vh" }}>
          Contact
        </h1>
        {/* Contact */}
      </main>
    </>
  )
}
