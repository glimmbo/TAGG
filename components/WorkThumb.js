import styled from "styled-components"

const Thumb = styled.img`
  max-width: 100%;

  /* static image */
  content: url(${({ staticSrc }) => staticSrc});

  :hover {
    /* when mobile */
    @media screen and (max-device-width: 425px) {
      content: url(${({ mobileSrc }) => mobileSrc});
    }

    /* when desktop */
    @media screen and (min-device-width: 425px) {
      content: url(${({ desktopSrc }) => desktopSrc});
    }
  }
`
const Frame = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  border: 1px solid var(--red);
  width: 100%;
  height: 100%;
`

const WorkThumb = ({ images, thumb }) => {
  const imageSrc = images[3].link
  const mobileSizeGif = thumb?.sizes[1].link
  const desktopSizeGif = thumb?.sizes[2].link

  // in case of error code 1504 on getAnimatedThumbs.. show static
  return (
    <Frame>
      <Thumb
        staticSrc={imageSrc}
        desktopSrc={desktopSizeGif}
        mobileSrc={mobileSizeGif}
      />
    </Frame>
  )
}

export default WorkThumb
