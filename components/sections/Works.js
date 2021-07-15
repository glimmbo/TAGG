import RedStrokeHeader from "../RedStrokeHeader"
import Link from "next/link"
import styled from "styled-components"
import WorkThumb from "../WorkThumb"
import PoppedHeader from "../PoppedHeader"

const WorksSection = styled.section``

const List = styled.div`
  display: grid;
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

  @media screen and (max-device-width: 411px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Work = styled.div`
  display: initial;
  cursor: pointer;
  padding: 5vh;

  h3 {
    font-family: Montserrat-Bold;
    color: var(--grey);
  }

  :hover h3 {
    color: var(--red);
  }
`

export default function Works({ videoList }) {
  const gridAreas = ["a", "b", "c", "d", "e", "f", "g", "h"]
  return (
    <WorksSection id="works">
      <PoppedHeader style={{ marginLeft: "4vw" }}>
        Featured Projects
      </PoppedHeader>
      {/* <RedStrokeHeader>Works</RedStrokeHeader> */}
      <List style={{ height: `${videoList.length - 1 * 26}vh` }}>
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
                  transform: `translateY(${i * -26}vh)`,
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
    </WorksSection>
  )
}
