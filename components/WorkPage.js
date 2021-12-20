import Head from "next/head"
import PoppedHeader from "./PoppedHeader"
import styled from "styled-components"
import { FullPlayer } from "./elements/Player"
import { DividerWithArrows } from "./elements/DividerWithArrows"
import { useRouter } from "next/router"
import { useState } from "react"
import { indexOf } from "lodash"

const Content = styled.section`
  background-color: var(--black);
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 5%;

  box-sizing: border-box;
  & * {
    box-sizing: border-box;
  }
`
const SmallRedHeader = styled.h3`
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--red);
  user-select: none;
  font-family: Consolas, sans-serif;
  font-weight: 700;
`
const Credits = styled.div`
  width: calc(100% - 80px); /* TriangleButtonx2 */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -2em;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`
const CloseButton = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: "";
    height: 33px;
    width: 2px;
    background-color: var(--grey);
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: var(--white);
    }
  }

  &:active {
    &::before,
    &::after {
      background-color: var(--red);
    }
  }
`

const Credit = styled.div`
  height: fit-content;
  margin: 1em;

  :first-child {
    margin-left: 0;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default function WorkPage({ videos, videoId }) {
  const [video, setVideo] = useState(
    videos.find((video) => video.uri == `/videos/${videoId}`),
  )

  try {
    const desc = JSON.parse(video?.description)
    const router = useRouter()

    return (
      <>
        <Head>
          <title>{desc.title}</title>
        </Head>
        <Content>
          <CloseButton onClick={() => router.push("/#works")} />
          <FullPlayer uri={video.uri} />
          <PoppedHeader style={{ marginTop: "2em", marginBottom: 0 }}>
            {desc.client}
          </PoppedHeader>
          <p style={{ marginBottom: "-20px" }}>{desc.title}</p>
          <DividerWithArrows
            onLeft={() => {
              const currentIndex = indexOf(videos, video)
              const newIndex =
                currentIndex - 1 < 0 ? videos.length - 1 : currentIndex - 1
              setVideo(videos[newIndex])

              const newVideoId = video.uri.split("/")[2]
              router.push(`/works/[videoId]`, `/works/${newVideoId}`, {
                shallow: true,
              })
            }}
            onRight={() => {
              const currentIndex = indexOf(videos, video)
              const newIndex =
                currentIndex + 1 > videos.length - 1 ? 0 : currentIndex + 1
              setVideo(videos[newIndex])

              const newVideoId = video.uri.split("/")[2]
              router.push(`/works/[videoId]`, `/works/${newVideoId}`, {
                shallow: true,
              })
            }}
          />
          <Credits>
            {desc &&
              Object.entries(desc).map(([key, value]) => {
                if (!["id", "title", "client"].includes(key)) {
                  return (
                    <Credit key={key}>
                      <SmallRedHeader>{key}</SmallRedHeader>
                      <p>{value}</p>
                    </Credit>
                  )
                }
              })}
          </Credits>
        </Content>
      </>
    )
  } catch (error) {
    console.error(error)
    return <></>
  }
}
