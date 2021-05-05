import Link from "next/link"
import Head from "next/head"
import { vimeoClient, TAGG_ID } from "../../vimeo"

// because [slug] is a dynamic route, get all routes
export async function getStaticPaths() {
  const videolist = await new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: "GET",
        path: `/users/${TAGG_ID}/videos`, // TODO: site content folder on Vimeo
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

  return {
    paths: videolist.map((video) => {
      return {
        params: {
          uri: `/works/${video.uri}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { uri } = params
  const video = await new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: "GET",
        path: uri,
        userId: TAGG_ID,
      },
      (error, body, status_code, headers) => {
        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(body.data)
      },
    )
  })

  return { props: { video } }
}

export default function Work(props) {
  console.log(props)
  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{props.name}</h1>

      <p>{props.description}</p>

      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  )
}
