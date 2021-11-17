import styled from "styled-components"
import WhiteStrokeHeader from "../WhiteStrokeHeader"
import PoppedHeader from "../PoppedHeader"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useRouter } from "next/router"

const Section = styled.section`
  position: relative;
  padding: 0;
  height: 100vh;
  margin-bottom: 5vh;

  .centerframe {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    position: absolute;
    overflow: hidden;
    height: 100%;
    transition: all 1000ms ease-in;
    z-index: 0;
  }
  .hidden {
    opacity: 0.01;
    filter: grayscale(100%);
    filter: blur(100%);
  }
  .appear {
    opacity: 1;
    filter: grayscale(0%);
    filter: blur(0%);
  }

  .textpos {
    margin: 1em;
    margin-bottom: 5%;
    margin-top: auto;
    transition: all 1.5s ease-in 0.3s;
  }

  p {
    text-align: center;
  }
`

const WhoWeAre = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const router = useRouter()

  // https://github.com/vercel/next.js/pull/27195 (no scroll on hash push)
  // useEffect(() => {
  //   // push new hash when in view
  //   if (inView && window) {
  //     router.replace(`/#about`, `/#about`, { shallow: true })
  //   }
  // }, [inView])

  return (
    <Section id="about" ref={ref}>
      <div className="centerframe">
        <img
          src="/images/TAGG_webbanner5.png"
          id="logo"
          className={inView ? "img appear" : "img hidden"}
        />
      </div>
      <div className="centerframe">
        <WhiteStrokeHeader
          style={{ transform: "translate(-5%, -80%)" }}
          inView={inView}
        >
          Who
        </WhiteStrokeHeader>
        <WhiteStrokeHeader
          style={{ transform: "translate(0%, 0%)" }}
          inView={inView}
        >
          We
        </WhiteStrokeHeader>
        <WhiteStrokeHeader
          style={{ transform: "translate(25%, 80%)" }}
          inView={inView}
        >
          Are
        </WhiteStrokeHeader>
      </div>

      <div className="centerframe">
        <div className={inView ? "textpos appear" : "textpos hidden"}>
          <PoppedHeader>A VIDEO-FIRST CREATIVE AGENCY</PoppedHeader>
          <p>
            We solve creative problems with video. It’s not an afterthought,
            it’s not the cherry on top, it’s the whole motherf%^$ing sundae.
            <br />
            It doesn’t matter whether that’s a slick TVC spot, a docu-style
            brand story, or a UGC campaign shot exclusively on iPhone.
            <br />
            No tool, style, or deliverable is out of the picture.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default WhoWeAre
