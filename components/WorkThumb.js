import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;
`

const Gif = styled.img`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;
  outline: 1px solid var(--red);
  opacity: 0;
`

const Frame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
`

const WorkThumb = ({ images, thumb }) => {
  const imageSrc = images[3]?.link
  const desktopSizeGif = thumb?.sizes[2].link

  return (
    <Frame>
      <Gif src={desktopSizeGif} alt={imageSrc} className="gif" />
      <Image src={imageSrc} className="image" />
    </Frame>
  )
}

export default WorkThumb
