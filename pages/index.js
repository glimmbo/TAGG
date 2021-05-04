import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { NavBar } from "../components/Nav"

export async function getStaticProps() {
  // fetch list of videos
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1",
  )
  const postList = await response.json()
  return {
    props: {
      postList,
    },
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}
