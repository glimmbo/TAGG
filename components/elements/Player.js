import React from "react"
import VimeoPlayer from "react-player/vimeo"

export const FullPlayer = ({ uri }) => {
  const url = `https://player.vimeo.com/video/${uri?.split("/")[2]}`

  return (
    <VimeoPlayer
      url={url}
      width="100%"
      height="80%"
      style={{ alignSelf: "center" }}
      controls
      config={{
        vimeo: {
          playerOptions: {
            controls: true,
            color: "#ed1a62",
            playsinline: false,
            keyboard: false,
            loop: false,
            portrait: false,
          },
        },
      }}
    />
  )
}
