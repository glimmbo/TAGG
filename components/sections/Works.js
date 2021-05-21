import RedStrokeHeader from "../RedStrokeHeader"
import Link from "next/link"
import styled from "styled-components"
import WorkThumb from "../WorkThumb"

const WorksSection = styled.section``

export default function Works({ videoList }) {
  // list of videolist = 8 (fixed to a TAGG folder, can change)

  // console.log(videolist)
  return (
    <WorksSection id="works">
      <RedStrokeHeader>Works</RedStrokeHeader>
      <div className="list">
        {/* first 8 for now */}
        {videoList.map((video, i) => (
          <Link
            key={i}
            href="/works/[workUri]" // hosted page file
            as={`/works/${video.id}`} // actual, generated url
          >
            <WorkThumb video={video} />
          </Link>
        ))}
      </div>
    </WorksSection>
  )
}
