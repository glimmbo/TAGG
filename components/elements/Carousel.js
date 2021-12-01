import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useEffect, useState } from "react"
import { ClipSlide } from "./Player"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"
import { TriangleButton } from "../elements/DividerWithArrows"

// scanline effect plucked from: https://codepen.io/meduzen/pen/zxbwRV?editors=0100

const Frame = styled.section`
  position: relative;
  height: 91vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  position: relative;
  overflow: hidden;
  padding: 10vh 2% 2% 2%;
  margin-top: 0.5em;

  & .carousel {
    border: 10px solid var(--red);
    min-width: 100%;
    min-height: 100%;
  }
  & .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden; // only to animate the unique scanline
  }
`

const Dot = styled.div`
  border-radius: 100%;
  height: 12px;
  width: 12px;
  margin: 5px 0;
  outline: 1px solid var(--lightgrey);
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

  :active {
    ::after {
      background-color: var(--red);
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 10vh 2% 2% 2%;
  margin-top: 0.5em;
  z-index: 10;
`

const ButtonStack = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8% 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Controls = ({ next, prev, selected, selectedClips }) => {
  return (
    <Overlay>
      <ButtonStack>
        {selectedClips &&
          selectedClips?.map((clip, i) => (
            <Dot key={i} isActive={selected == i} />
          ))}
        <TriangleButton left onClick={prev} style={{ marginTop: "10px" }} />
        <TriangleButton right onClick={next} />
      </ButtonStack>
    </Overlay>
  )
}

const ClipCarousel = ({ clipsMobile, clipsDesktop }) => {
  useEffect(() => {
    console.log(clipsMobile, clipsDesktop)
  }, [])

  const [selectedClip, setSelectedClip] = useState(0)

  const isMobile = useMediaQuery({ query: "(max-width: 425px)" })
  const selectedClips = isMobile ? clipsMobile : clipsDesktop

  const next = () => {
    const next =
      selectedClip + 1 > selectedClips.length - 1 ? 0 : selectedClip + 1
    setSelectedClip(next)
  }

  const prev = () => {
    const prev =
      selectedClip - 1 < 0 ? selectedClips.length - 1 : selectedClip - 1
    setSelectedClip(prev)
  }

  return (
    <Frame>
      <Carousel
        width="100%"
        height="100%"
        // infiniteLoop
        selectedItem={selectedClip}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        swipeable={isMobile}
        // onSwipeEnd={}
      >
        {selectedClips.map((clip, i) => {
          return (
            // <div key={i} style={{ height: "100%", width: "100%" }}></div>
            <ClipSlide clip={clip} isSelected={selectedClip == i} key={i} />
          )
        })}
      </Carousel>

      <Controls
        prev={prev}
        next={next}
        selected={selectedClip}
        selectedClips={selectedClips}
      />
    </Frame>
  )
}

export default ClipCarousel
