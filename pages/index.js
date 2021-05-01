import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { NavBar } from "../components/Nav"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
      </main>
    </div>
  )
}
