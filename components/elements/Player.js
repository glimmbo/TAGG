import React from "react"
import VimeoPlayer from "react-player/vimeo"
import styled from "styled-components"

export const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & iframe,
  & object,
  & embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const FullPlayer = ({ uri }) => {
  const url = `https://player.vimeo.com/video/${uri?.split("/")[2]}`

  return (
    <EmbedContainer>
      <VimeoPlayer
        url={url}
        width="1024px"
        height="768px"
        controls
        config={{
          vimeo: { playerOptions: { color: "#ed1a62", playsinline: false } },
        }}
      />
    </EmbedContainer>
  )
}
