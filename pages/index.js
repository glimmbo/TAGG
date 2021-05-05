import Head from "next/head"
import Link from "next/link"
import { NavBar } from "../components/Nav"
import { vimeoClient, TAGG_ID } from "../vimeo"
import styles from "../styles/Home.module.css"

export async function getStaticProps(context) {
  // fetch list of videos, promisified
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

  return { props: { videolist } }
}

export default function Home(props) {
  const { videolist } = props
  return (
    <div className={styles.container}>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{ fontFamily: "Montserrat" }}></h1>
        {videolist.map((video) => {
          return (
            <Link href={`/works${video.uri}`} key={video.resouce_key}>
              <a style={{ color: "white" }}>{video.name}</a>
            </Link>
          )
        })}
        {/* Clip Carousel */}
        {/* Featured Projects */}
        {/* Who We Are */}
        {/* People */}
        {/* Extended Family */}
        {/* Worked With */}
        {/* Contact */}
      </main>
    </div>
  )
}
