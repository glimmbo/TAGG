import RedStrokeHeader from "../RedStrokeHeader"
import Link from "next/link"
import styled from "styled-components"
import WorkThumb from "../WorkThumb"

const WorksSection = styled.section``

const WorkTitle = styled.h3`
  font-family: Montserrat-Bold;
  color: var(--grey);
  :hover {
    color: var(--red);
  }
`

export default function Works({ videoList }) {
  // console.log("videoList", videoList)
  // console.log("thumbs", thumbs)
  return (
    <WorksSection id="works">
      {/* <RedStrokeHeader>Works</RedStrokeHeader> */}
      <div className="list">
        {videoList.map((video, i) => {
          console.log(video)
          return (
            <Link
              key={i}
              href="/works/[workUri]" // hosted page file
              as={`/works/${video.id}`} // actual, generated url
            >
              <>
                <WorkThumb thumb={video.thumb} key={i} />
                <WorkTitle>{video.name}</WorkTitle>
                {/* TODO: use video.groups (Production, Post-Prodution, etc) */}
                <p>{video.description}</p>
              </>
            </Link>
          )
        })}
      </div>
    </WorksSection>
  )
}
