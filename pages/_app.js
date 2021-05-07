import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="images/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
