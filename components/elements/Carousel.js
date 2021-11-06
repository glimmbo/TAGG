import { Carousel } from "react-responsive-carousel"
import { useEffect } from "react/cjs/react.development"
import { ClipPlayer } from "./Player"
import styled from "styled-components"

// scanline effect plucked from: https://codepen.io/meduzen/pen/zxbwRV?editors=0100

const Frame = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  position: relative;

  .scanlines {
    height: 90%;
    width: 90%;
    position: relative;
    overflow: hidden; // only to animate the unique scanline
    border: 10px solid var(--red);

    &:before,
    &:after {
      display: block;
      pointer-events: none;
      content: "";
      position: absolute;
    }

    // unique scanline
    &:before {
      width: 100%;
      height: calc(2px * 1);
      z-index: 2147483648 + 1;
      background: rgba(#000, 0.3);
      opacity: 0.75;
      animation: scanline 6s linear infinite;
    }

    // the scanlines
    &:after {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2147483648;
      background: linear-gradient(to bottom, transparent 50%, var(--black) 51%);
      background-size: 100% calc(2px * 2);
      animation: scanlines 1s steps(60) infinite;
    }
  }

  /* @keyframes scanline {
    0% {
      transform: translate3d(0, 200000%, 0);
    }
  }

  @keyframes scanlines {
    0% {
      background-position: 0 50%;
    }
  } */
`

const ClipCarousel = ({ clipsMobile, clipsDesktop }) => {
  // cycle clips
  useEffect(() => {
    console.log(clipsMobile, clipsDesktop)
  }, [])

  return (
    <Frame>
      <div className="scanlines"></div>
    </Frame>
  )
}

export default ClipCarousel
