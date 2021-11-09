import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useEffect, useState } from "react/cjs/react.development"
import { ClipSlide } from "./Player"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { TriangleButton } from "../elements/DividerWithArrows"

// scanline effect plucked from: https://codepen.io/meduzen/pen/zxbwRV?editors=0100

const Frame = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  position: relative;
  overflow: hidden;
  padding: 10vh 2% 2% 2%;

  & .carousel {
    background-color: darkolivegreen;
    border: 10px solid var(--red);
    max-width: 100%;
  }
  & .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden; // only to animate the unique scanline

    background-color: darkslateblue;
  }
`

const Dot = styled.div`
  border-radius: 100%;
  height: 15px;
  width: 15px;
  margin: 5px;
  border: 1px solid var(--lightgrey);
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ::after {
    content: "";
    position: absolute;
    border-radius: 100%;
    height: 50%;
    width: 50%;
    background-color: ${({ isActive }) =>
      isActive ? "var(--red)" : "transparent"};
  }

  /* dots too small to click... */
  /* :hover {
    ::after {
      background-color: var(--lightgrey);
    }
  } */

  :active {
    ::after {
      background-color: var(--red);
    }
  }
`

const Controls = ({ children, next, prev }) => {
  // custom overlay controls and positioning
  return (
    <div>
      <Dot />
      <TriangleButton right />
      {children}
    </div>
  )
}

const ClipCarousel = ({ clipsMobile, clipsDesktop }) => {
  useEffect(() => {
    console.log(clipsMobile, clipsDesktop)
  }, [])

  const [selectedClip, setSelectedClip] = useState(0)

  const next = () => {
    console.log("next")
    setSelectedClip(selectedClip + 1)
  }

  const prev = () => {
    console.log("prev")
    setSelectedClip(setSelectedClip - 1)
  }

  // useMediaQuery to choose mobile/desktop
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" })
  const selectedClips = isMobile ? [...clipsMobile] : [...clipsDesktop]

  return (
    <Frame>
      <Carousel
        // height="1024px" // nope...
        width="100%"
        infiniteLoop
        // showIndicators={false}
        // showArrows={false}
        showThumbs={false}
        showStatus={false}
        // renderIndicator={({ onClickHandler, isSelected, index, label }) => {
        //   console.log(isSelected)
        //   return <Dot isActive={isSelected} />
        // }}
        // renderArrowNext={(onClickHandler, hasNext, label) => (
        //   <TriangleButton right onClick={onClickHandler} />
        // )}
        // renderArrowPrev={(onClickHandler, hasPrev, label) => (
        //   <TriangleButton left onClick={onClickHandler} />
        // )}
        swipeable={isMobile}
      >
        {clipsDesktop.map((clip, i) => {
          return (
            <ClipSlide uri={clip.uri} isSelected={selectedClip == i} key={i} />
          )
        })}
      </Carousel>
    </Frame>
  )
}

export default ClipCarousel
