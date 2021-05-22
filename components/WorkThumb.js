import styled from "styled-components"
import { useEffect, useState } from "react"

const Gif = styled.img`
  /* desktop */
  height: 415px;
  width: 739px;
  /* mobile */
  @media screen and (max-width: 762px) {
    height: 67;
    width: 120;
  } ;
`
const Title = styled.h3`
  font-family: Montserrat-Bold;
  color: var(--grey);
  :hover {
    color: var(--red);
  }
`
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
  /*
    let isPageWide = useMediaQuery('(min-width: 800px)')
  */
}
const WorkThumb = ({ thumb }) => {
  const mobileSize = thumb?.sizes[0]
  const desktopSize = thumb?.sizes[2]

  return <Gif src={desktopSize.link} height />
}
export default WorkThumb

// {
//   "uri": "/videos/291998673/animated_thumbsets/9248128b-0272-444e-94a0-6fc94683deb0",
//   "clip_uri": "/videos/291998673",
//   "status": "completed",
//   "sizes": [
//     {
//       "uuid": "9aec6193-ca30-4b18-b0ee-6cdcbc8d1134",
//       "profile_id": "Preview",
//       "is_downloadable": false,
//       "start_time": 23,
//       "duration": 6,
//       "file_format": "gif",
//       "width": 120,
//       "height": 67,
//       "file_size": 319124,
//       "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/9aec6193-ca30-4b18-b0ee-6cdcbc8d1134.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=5f2d2733a79695455876fec08e6fffc16871c88b",
//       "link_with_play_button": ""
//     },
//     {
//       "uuid": "e43b755b-9f77-452e-b4e3-c122c0fde290",
//       "profile_id": "Low",
//       "is_downloadable": true,
//       "start_time": 23,
//       "duration": 6,
//       "file_format": "gif",
//       "width": 640,
//       "height": 360,
//       "file_size": 4538718,
//       "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/e43b755b-9f77-452e-b4e3-c122c0fde290.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=cd426328868c20b9f12911bd79042de047369f4b",
//       "link_with_play_button": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/aeca8e72-ed67-4798-803e-abc3b1480615.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=1096b66f02c1b0324d02cb2f40046c870e39eeb3"
//     },
//     {
//       "uuid": "84d1d785-a516-4522-8cda-2e008cfcbcc4",
//       "profile_id": "High",
//       "is_downloadable": true,
//       "start_time": 23,
//       "duration": 6,
//       "file_format": "gif",
//       "width": 739,
//       "height": 415,
//       "file_size": 14458963,
//       "link": "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/84d1d785-a516-4522-8cda-2e008cfcbcc4.gif?ClientID=vimeo-core-prod&Date=1620797384&Signature=e403908627e30f4ddb0788f0f2b21c9a61e11765",
//       "link_with_play_button": ""
//     }
//   ],
//   "created_on": 1620797250
// }
