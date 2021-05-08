import { GlobalStyle } from "../styles/Global"

import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TAGG Creative</title>
        <meta name="description" content="Make good content" />
        <link rel="icon" href="images/favicon/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
