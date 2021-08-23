import styled from "styled-components"
import WhiteStrokeHeader from "../WhiteStrokeHeader"
import PoppedHeader from "../PoppedHeader"
import { useInView } from "react-intersection-observer"

const Section = styled.section`
  position: relative;
  padding: 0;
  height: 100vh;

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
    transition: all 1500ms ease-in 600ms;
    z-index: 0;

    /* add radial blur? */
    /* ::after {
      content: ""; // ::before and ::after both require content
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: radial-gradient(transparent, var(--black));
    } */
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
    margin-bottom: 15%;
    margin-top: auto;
    transition: all 1500ms ease-in 700ms;
  }
`

const WhoWeAre = () => {
  const { ref, inView } = useInView({
    threshold: [0.5],
  })

  return (
    <Section id="about" ref={ref}>
      <div className="centerframe">
        <img
          src="/images/logo_altered.png"
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
          <PoppedHeader>WE ARE TAGG</PoppedHeader>
          <p>
            Born digital advertising tailored for social networks. <br /> We
            take our clients' brand and translate it into something interesting
            and shareable.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default WhoWeAre
