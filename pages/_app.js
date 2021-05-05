import "../styles/globals.module.css"
import { Layout } from "../components/layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
