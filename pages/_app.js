import { GlobalStyle } from "../styles/Global"
import Fonts from "../styles/Fonts"
import Head from "next/head"
import { useEffect } from "react/cjs/react.development"
import MyDocument from "./_document"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="images/favicon/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link
          rel="preload"
          href="/fonts/Consolas-Font/CONSOLA.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-ExtraBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
