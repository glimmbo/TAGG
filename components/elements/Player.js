import React from "react"
import VimeoPlayer from "react-player/vimeo"
import parse from "html-react-parser"
import styled from "styled-components"

const EmbedContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  min-width: 100%;

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
  // "https://player.vimeo.com/video/{video_id}"
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

const Scanlines = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden; // only to animate the unique scanline

  &::before,
  &::after {
    display: block;
    pointer-events: none;
    content: "";
    position: absolute;
  }

  // unique scanline
  &::before {
    width: 100%;
    height: 2px;
    z-index: 1;
    background: #1e1e1ead;
    opacity: 0.75;
    animation: scanline 6s linear infinite;
  }

  // the scanlines
  &::after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(to bottom, transparent 50%, #1e1e1e4d 51%);
    background-size: 100% 5px;
    animation: scanlines 1s steps(30) infinite;
  }

  @keyframes scanline {
    0% {
      transform: translate3d(0, 200000%, 0);
    }
  }

  @keyframes scanlines {
    0% {
      background-position: 0 50%;
    }
  }

  & iframe {
    margin: 0 !important;
  }
  & iframe * {
    user-select: none;
  }
`

export const ClipSlide = ({ uri, isSelected }) => {
  const url = `https://player.vimeo.com/video/${uri?.split("/")[2]}`
  console.log(url)
  return (
    <Scanlines>
      <VimeoPlayer
        width="100%"
        url={url}
        playing={isSelected}
        loop
        muted
        controls={false}
        config={{
          vimeo: {
            playerOptions: { background: true },
          },
        }}
      />
    </Scanlines>
  )
}

// let vid = {
//   uri: "/videos/571461797",
//   name: "TGS - Under Armour.mp4",
//   description: null,
//   type: "video",
//   link: "https://vimeo.com/571461797/bab93d82f1",
//   duration: 12,
//   width: 3840,
//   language: null,
//   height: 2160,
//   embed: {
//     buttons: {
//       like: true,
//       watchlater: true,
//       share: true,
//       embed: true,
//       hd: false,
//       fullscreen: true,
//       scaling: true,
//     },
//     logos: { vimeo: true, custom: [Object] },
//     title: { name: "user", owner: "user", portrait: "user" },
//     end_screen: [],
//     playbar: true,
//     volume: true,
//     speed: true,
//     color: "00adef",
//     event_schedule: true,
//     uri: null,
//     html: '<iframe src="https://player.vimeo.com/video/571461797?h=bab93d82f1&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=211877" width="3840" height="2160" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="TGS - Under Armour.mp4"></iframe>',
//     badges: {
//       hdr: false,
//       live: [Object],
//       staff_pick: [Object],
//       vod: false,
//       weekend_challenge: false,
//     },
//   },
//   created_time: "2021-07-06T02:05:53+00:00",
//   modified_time: "2021-07-15T04:35:46+00:00",
//   release_time: "2021-07-06T02:05:53+00:00",
//   content_rating: ["unrated"],
//   content_rating_class: "unrated",
//   rating_mod_locked: false,
//   license: null,
//   privacy: {
//     view: "unlisted",
//     embed: "public",
//     download: true,
//     add: true,
//     comments: "anybody",
//   },
//   pictures: {
//     uri: "/videos/571461797:bab93d82f1/pictures/1181919799",
//     active: true,
//     type: "custom",
//     base_link:
//       "https://i.vimeocdn.com/video/1181919799-f7be577763f323c8ba203766f19717d709272895300418313dfa86a71e3ec43d-d",
//     sizes: [
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//     ],
//     resource_key: "50d8a70ba437cc269a07e9563f9c583e5c528b56",
//     default_picture: false,
//   },
//   tags: [],
//   stats: { plays: 0 },
//   categories: [],
//   uploader: {
//     pictures: {
//       uri: "/users/33581873/pictures/28044238",
//       active: true,
//       type: "custom",
//       base_link: "https://i.vimeocdn.com/portrait/28044238",
//       sizes: [Array],
//       resource_key: "9dc567c0a78075c90cbf876c20b2882bd8b78147",
//       default_picture: false,
//     },
//   },
//   metadata: {
//     connections: {
//       comments: [Object],
//       credits: null,
//       likes: [Object],
//       pictures: [Object],
//       texttracks: [Object],
//       related: [Object],
//       recommendations: null,
//       albums: [Object],
//       available_albums: [Object],
//       versions: [Object],
//     },
//     interactions: {
//       watchlater: [Object],
//       report: [Object],
//       view_team_members: [Object],
//       edit: [Object],
//       edit_content_rating: [Object],
//       delete: [Object],
//       can_update_privacy_to_public: [Object],
//       trim: [Object],
//     },
//     is_vimeo_create: false,
//     is_screen_record: false,
//   },
//   manage_link: "/manage/videos/571461797/bab93d82f1",
//   user: {
//     uri: "/users/33581873",
//     name: "TAGG Creative",
//     link: "https://vimeo.com/taggcreative",
//     capabilities: {
//       hasLiveSubscription: false,
//       hasEnterpriseLihp: false,
//       hasSvvTimecodedComments: false,
//     },
//     location: "Vancouver BC",
//     gender: "n",
//     bio: "Make good content.",
//     short_bio: null,
//     created_time: "2014-10-21T22:11:38+00:00",
//     pictures: {
//       uri: "/users/33581873/pictures/28044238",
//       active: true,
//       type: "custom",
//       base_link: "https://i.vimeocdn.com/portrait/28044238",
//       sizes: [Array],
//       resource_key: "9dc567c0a78075c90cbf876c20b2882bd8b78147",
//       default_picture: false,
//     },
//     websites: [[Object], [Object], [Object]],
//     metadata: { connections: [Object] },
//     location_details: {
//       formatted_address: "Vancouver BC",
//       latitude: null,
//       longitude: null,
//       city: null,
//       state: null,
//       neighborhood: null,
//       sub_locality: null,
//       state_iso_code: null,
//       country: null,
//       country_iso_code: null,
//     },
//     skills: [],
//     available_for_hire: true,
//     can_work_remotely: true,
//     preferences: { videos: [Object] },
//     content_filter: [
//       "language",
//       "drugs",
//       "violence",
//       "nudity",
//       "safe",
//       "unrated",
//     ],
//     resource_key: "d988f97b49f95aef7f80d80deaade58185d0e5cd",
//     account: "pro",
//   },
//   parent_folder: {
//     created_time: "2021-05-20T04:55:48+00:00",
//     modified_time: "2021-10-26T23:59:34+00:00",
//     last_user_action_event_date: "2021-10-26T23:59:34+00:00",
//     name: "featured-clips-16-9",
//     privacy: { view: "nobody" },
//     resource_key: "8a73e395834df830f90acd5df92114477759a584",
//     uri: "/users/33581873/projects/4485363",
//     link: null,
//     pinned_on: null,
//     is_pinned: false,
//     is_private_to_user: false,
//     user: {
//       uri: "/users/33581873",
//       name: "TAGG Creative",
//       link: "https://vimeo.com/taggcreative",
//       capabilities: [Object],
//       location: "Vancouver BC",
//       gender: "n",
//       bio: "Make good content.",
//       short_bio: null,
//       created_time: "2014-10-21T22:11:38+00:00",
//       pictures: [Object],
//       websites: [Array],
//       metadata: [Object],
//       location_details: [Object],
//       skills: [],
//       available_for_hire: true,
//       can_work_remotely: true,
//       preferences: [Object],
//       content_filter: [Array],
//       resource_key: "d988f97b49f95aef7f80d80deaade58185d0e5cd",
//       account: "pro",
//     },
//     access_grant: null,
//     metadata: { connections: [Object], interactions: [Object] },
//   },
//   last_user_action_event_date: "2021-07-15T04:35:46+00:00",
//   review_page: {
//     active: true,
//     link: "https://vimeo.com/taggcreative/review/571461797/86182b4bef",
//   },
//   app: { name: "Parallel Uploader", uri: "/apps/87099" },
//   status: "available",
//   resource_key: "c1b78165f46334194155cbf9f7ee7daab08436d7",
//   upload: {
//     status: "complete",
//     link: null,
//     upload_link: null,
//     complete_uri: null,
//     form: null,
//     approach: null,
//     size: null,
//     redirect_url: null,
//   },
//   transcode: { status: "complete" },
//   is_playable: true,
//   has_audio: true,
// }
