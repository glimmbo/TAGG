import styled from "styled-components"
import { vimeoClient } from "../vimeo"

const Thumb = styled.img`
  height: 90;
  width: 160;
`
const Title = styled.h3`
  color: var(--grey);
  :hover {
    color: var(--red);
  }
`
export const getStaticProps = async (context) => {
  console.log("WorkThumb context", context)
  // Get thumbnails:
  //  /videos/{video_id}/animated_thumbsets
  const allThumbs = vimeoClient.request(
    `/videos/${video_id}/animated_thumbsets`,
    (data) => {
      console.dir(data, { depth: null, maxArrayLength: null })
      return data
    },
  )

  // pick most recent's "Low" version
  const selectedThumb = allThumbs
    .sort((a, b) => b.created_on - a.created_on)[0]
    .sizes.filter((size) => size["profile_id"] === "Low")

  return { props: { selectedThumb: selectedThumb } }
}

export const WorkThumb = ({ selectedThumb, workName, workSubtitle }) => (
  <>
    <Thumb src={selectedThumb} />
    <Title>{workName}</Title>
    <p>{workSubtitle}</p>
  </>
)

/* 
// use most recently, max thumb.create_ond
{
  "total": 1,
  "data": [
    {
      "uri": "/videos/291998673/animated_thumbsets/9248128b-0272-444e-94a0-6fc94683deb0",
      "clip_uri": "/videos/291998673",
      "status": "completed",
      "sizes": [
        {
          "uuid": "9aec6193-ca30-4b18-b0ee-6cdcbc8d1134",
          "profile_id": "Preview",
          "is_downloadable": false,
          "start_time": 23,
          "duration": 6,
          "file_format": "gif",
          "width": 120,
          "height": 67,
          "file_size": 319124,
          "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9aec6193-ca30-4b18-b0ee-6cdcbc8d1134.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=5f2d2733a79695455876fec08e6fffc16871c88b",
          "link_with_play_button": ""
        },
        {
          "uuid": "e43b755b-9f77-452e-b4e3-c122c0fde290",
          "profile_id": "Low",
          "is_downloadable": true,
          "start_time": 23,
          "duration": 6,
          "file_format": "gif",
          "width": 640,
          "height": 360,
          "file_size": 4538718,
          "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e43b755b-9f77-452e-b4e3-c122c0fde290.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=cd426328868c20b9f12911bd79042de047369f4b",
          "link_with_play_button": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/aeca8e72-ed67-4798-803e-abc3b1480615.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=1096b66f02c1b0324d02cb2f40046c870e39eeb3"
        },
        {
          "uuid": "84d1d785-a516-4522-8cda-2e008cfcbcc4",
          "profile_id": "High",
          "is_downloadable": true,
          "start_time": 23,
          "duration": 6,
          "file_format": "gif",
          "width": 739,
          "height": 415,
          "file_size": 14458963,
          "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/84d1d785-a516-4522-8cda-2e008cfcbcc4.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=e403908627e30f4ddb0788f0f2b21c9a61e11765",
          "link_with_play_button": ""
        }
      ],
      "created_on": 1620797250
    }
  ]
}
*/
