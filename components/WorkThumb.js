import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0;
  }
`

const Gif = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  transition: opacity 0.1s ease-in-out;

  opacity: 0;
  :hover {
    opacity: 1;
  }
`

const Frame = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  border: 1px solid var(--red);
  width: 100%;
`

const WorkThumb = ({ images, thumb }) => {
  const imageSrc = images[3]?.link
  const mobileSizeGif = thumb?.sizes[1].link
  const desktopSizeGif = thumb?.sizes[2].link

  // in case of error code 1504 on getAnimatedThumbs.. show static
  // need to load gif before render to avoid flickering?
  return (
    <Frame>
      <Gif src={desktopSizeGif} alt={imageSrc} />
      <Image src={imageSrc} />
    </Frame>
  )
}

export default WorkThumb
