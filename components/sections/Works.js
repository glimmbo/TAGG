import HomeSection from "./HomeSection"
import Link from "next/link"
import styled from "styled-components"
import WorkThumb from "../WorkThumb"

const List = styled.div`
  display: grid;
  padding: 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "a ."
    ". b"
    "c ."
    ". d"
    "e ."
    ". f"
    "g ."
    ". h";
  /* draft */
  display: block;
  max-width: 50%;

  @media screen and (max-device-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
  }
`

const Work = styled.div`
  display: initial;
  min-height: fit-content;
  cursor: pointer;
  max-width: 50%;

  h3 {
    font-family: Montserrat-Bold;
    color: var(--grey);
  }

  :hover h3 {
    color: var(--red);
  }

  @media screen and (max-device-width: 425px) {
    max-width: 100%;
  }
`

export default function Works({ videoList }) {
  const gridAreas = ["a", "b", "c", "d", "e", "f", "g", "h"]
  return (
    <HomeSection id="works" header="works">
      <List>
        {videoList.map((video, i) => {
          const videoId = video.uri.split("/")[2]
          return (
            <Link
              href="/works/[videoId]" // hosted page file
              as={`/works/${videoId}`} // actual, generated url
              key={i}
            >
              <Work
                key={i}
                className={`${gridAreas[i]}`}
                style={{
                  gridArea: gridAreas[i],
                }}
              >
                <WorkThumb
                  images={video.pictures.sizes}
                  thumb={video.thumb}
                  key={i}
                />
                <h3>{video.name}</h3>
                {/* TODO: use video.groups (Production, Post-Prodution, etc) */}
                {/* or, just have separately saved videos and use description */}
                <p>{video.description}</p>
              </Work>
            </Link>
          )
        })}
      </List>
    </HomeSection>
  )
}
