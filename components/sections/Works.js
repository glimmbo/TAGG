import RedStrokeHeader from "../RedStrokeHeader"
import Link from "next/link"
import styled from "styled-components"
import WorkThumb from "../WorkThumb"

const WorksSection = styled.section``

const Work = styled.div`
  max-width: 20%;
  h3 {
    font-family: Montserrat-Bold;
    color: var(--grey);
  }

  :hover h3 {
    color: var(--red);
  }
`

export default function Works({ videoList }) {
  return (
    <WorksSection id="works">
      {/* <RedStrokeHeader>Works</RedStrokeHeader> */}
      <div className="list">
        {videoList.map((video, i) => {
          return (
            <Link
              href="/works/[workUri]" // hosted page file
              as={`/works/${video.id}`} // actual, generated url
              key={i}
            >
              <Work key={i}>
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
      </div>
    </WorksSection>
  )
}
