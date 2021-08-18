import styled from "styled-components"

const Thumb = styled.img`
  max-width: 100%;
  /* min-height: fit-content; */
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

const WorkThumb = ({ images, thumb }) => {
  const imageSrc = images[3].link
  const mobileSizeGif = thumb?.sizes[1].link
  const desktopSizeGif = thumb?.sizes[2].link
  return (
    <Thumb
      staticSrc={imageSrc}
      desktopSrc={desktopSizeGif}
      mobileSrc={mobileSizeGif}
    />
  )
}

export default WorkThumb
