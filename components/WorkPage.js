import Head from "next/head"
import { NavBar } from "./NavBar"
import PoppedHeader from "./PoppedHeader"
import styled from "styled-components"
import { FullPlayer } from "./elements/Player"
import { DividerWithArrows } from "./elements/DividerWithArrows"

const Content = styled.section`
  overflow: hidden;
  margin-top: 10vh;
  background-color: var(--black);
  width: 100%;
  max-width: 100vw;
  /* max-height: 100vh; */
  margin: auto;
  /* margin-top: 10vh; for the navbar */
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
const Flex = styled.div`
  width: calc(100% - 80px); /* TriangleButtonx2 */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: -2em;
`

const Credit = styled.div`
  height: fit-content;
  margin: 1em;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default function WorkPage({ video, onLeft, onRight }) {
  const desc = JSON.parse(video?.description)

  return (
    <>
      <Head>
        <title>{video.title}</title>
      </Head>
      {/* <NavBar /> */}
      {/* TODO: close button instead of navbar */}
      <Content>
        <FullPlayer uri={video.uri} />
        {/* type? (ie music video) */}
        <PoppedHeader style={{ marginTop: "2em" }}>{video.name}</PoppedHeader>
        <Flex>
          {desc &&
            Object.entries(desc).map(([key, value]) => {
              return (
                <Credit key={key}>
                  <SmallRedHeader>{key}</SmallRedHeader>
                  <p>{value}</p>
                </Credit>
              )
            })}
        </Flex>
        {/* how to get urls to cycle.. */}
        <DividerWithArrows
          onLeft={() => console.log("router.push(left?)")}
          onRight={() => console.log("router.push(right?)")}
        />
      </Content>
    </>
  )
}

// JSON vimeo desc =  {
//   "Client": "Teekay",
//   "Agency": "TAGG Creative",
//   "Graphic Design": "Sallua",
//   "VFX/Animation": "RENDRD",
//   "Virtual Production": "Jumbo",
// }

/* Vimeo reference
{
  "uri": "/videos/291998673",
  "name": "TroyBoi - Tour Promo",
  "description": "Client: TroyBoi\n\nMusic: TroyBoi - Do You?\n\nProduced by TAGG Creative",
  "type": "video",
  "link": "https://vimeo.com/291998673",
  "duration": 74,
  "width": 1920,
  "language": null,
  "height": 1080,
  "embed": {
    "buttons": {
      "like": false,
      "watchlater": false,
      "share": false,
      "embed": false,
      "hd": false,
      "fullscreen": true,
      "scaling": true
    },
    "logos": {
      "vimeo": false,
      "custom": {
        "active": false,
        "url": null,
        "link": null,
        "sticky": false
      }
    },
    "title": {
      "name": "hide",
      "owner": "hide",
      "portrait": "hide"
    },
    "playbar": false,
    "volume": false,
    "speed": false,
    "color": "ee1a60",
    "uri": null,
    "html": "<iframe src=\"https://player.vimeo.com/video/291998673?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=211479\" width=\"1920\" height=\"1080\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen title=\"TroyBoi - Tour Promo\"></iframe>",
    "badges": {
      "hdr": false,
      "live": {
        "streaming": false,
        "archived": false
      },
      "staff_pick": {
        "normal": false,
        "best_of_the_month": false,
        "best_of_the_year": false,
        "premiere": false
      },
      "vod": false,
      "weekend_challenge": false
    }
  },
  "created_time": "2018-09-26T20:21:16+00:00",
  "modified_time": "2021-05-05T22:36:15+00:00",
  "release_time": "2018-09-26T20:21:16+00:00",
  "content_rating": [ "unrated" ],
  "license": null,
  "privacy": {
    "view": "anybody",
    "embed": "public",
    "download": false,
    "add": true,
    "comments": "anybody"
  },
  "pictures": {
    "uri": "/videos/291998673/pictures/728276264",
    "active": true,
    "type": "custom",
    "sizes": [
      {
        "width": 100,
        "height": 75,
        "link": "https://i.vimeocdn.com/video/728276264_100x75?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_100x75&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 200,
        "height": 150,
        "link": "https://i.vimeocdn.com/video/728276264_200x150?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_200x150&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 295,
        "height": 166,
        "link": "https://i.vimeocdn.com/video/728276264_295x166?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_295x166&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 640,
        "height": 360,
        "link": "https://i.vimeocdn.com/video/728276264_640x360?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_640x360&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1280,
        "height": 720,
        "link": "https://i.vimeocdn.com/video/728276264_1280x720?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1280x720&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/728276264_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/728276264_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/728276264_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/728276264_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      },
      {
        "width": 1920,
        "height": 1080,
        "link": "https://i.vimeocdn.com/video/728276264_1920x1080?r=pad",
        "link_with_play_button": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F728276264_1920x1080&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png"
      }
    ],
    "resource_key": "c4744f74beff60822fc45519ed4696fadd7d9697",
    "default_picture": false
  },
  "tags": [  ],
  "stats": { "plays": 133 },
  "categories": [  ],
  "metadata": {
    "connections": {
      "comments": {
        "uri": "/videos/291998673/comments",
        "options": [ "GET", "POST" ],
        "total": 0
      },
      "credits": {
        "uri": "/videos/291998673/credits",
        "options": [ "GET", "POST" ],
        "total": 0
      },
      "likes": {
        "uri": "/videos/291998673/likes",
        "options": [ "GET" ],
        "total": 1
      },
      "pictures": {
        "uri": "/videos/291998673/pictures",
        "options": [ "GET", "POST" ],
        "total": 3
      },
      "texttracks": {
        "uri": "/videos/291998673/texttracks",
        "options": [ "GET", "POST" ],
        "total": 0
      },
      "related": null,
      "recommendations": {
        "uri": "/videos/291998673/recommendations",
        "options": [ "GET" ]
      },
      "albums": {
        "uri": "/videos/291998673/albums",
        "options": [ "GET", "PATCH" ],
        "total": 0
      },
      "available_albums": {
        "uri": "/videos/291998673/available_albums",
        "options": [ "GET" ],
        "total": 0
      },
      "available_channels": {
        "uri": "/videos/291998673/available_channels",
        "options": [ "GET" ],
        "total": 0
      }
    },
    "interactions": {
      "watchlater": {
        "uri": "/users/33581873/watchlater/291998673",
        "options": [
          "GET",
          "PUT",
          "DELETE"
        ],
        "added": false,
        "added_time": null
      },
      "report": {
        "uri": "/videos/291998673/report",
        "options": [ "POST" ],
        "reason": [
          "pornographic",
          "harassment",
          "ripoff",
          "incorrect rating",
          "spam",
          "causes harm",
          "csam"
        ]
      },
      "view_team_members": {
        "uri": "/videos/291998673/teammembers",
        "options": [ "GET" ]
      },
      "edit": {
        "uri": "/videos/291998673",
        "options": [ "PATCH" ]
      },
      "delete": {
        "uri": "/videos/291998673",
        "options": [ "DELETE" ]
      }
    },
    "is_vimeo_create": false,
    "is_screen_record": false
  },
  "user": {
    "uri": "/users/33581873",
    "name": "TAGG Creative",
    "link": "https://vimeo.com/taggcreative",
    "capabilities": {
      "hasLiveSubscription": false,
      "hasEnterpriseLihp": false,
      "hasSvvTimecodedComments": false
    },
    "location": "Vancouver BC",
    "gender": "n",
    "bio": "Make good content.",
    "short_bio": null,
    "created_time": "2014-10-21T22:11:38+00:00",
    "pictures": {
      "uri": "/users/33581873/pictures/28044238",
      "active": true,
      "type": "custom",
      "sizes": [
        {
          "width": 30,
          "height": 30,
          "link": "https://i.vimeocdn.com/portrait/28044238_30x30"
        },
        {
          "width": 72,
          "height": 72,
          "link": "https://i.vimeocdn.com/portrait/28044238_72x72"
        },
        {
          "width": 75,
          "height": 75,
          "link": "https://i.vimeocdn.com/portrait/28044238_75x75"
        },
        {
          "width": 100,
          "height": 100,
          "link": "https://i.vimeocdn.com/portrait/28044238_100x100"
        },
        {
          "width": 144,
          "height": 144,
          "link": "https://i.vimeocdn.com/portrait/28044238_144x144"
        },
        {
          "width": 216,
          "height": 216,
          "link": "https://i.vimeocdn.com/portrait/28044238_216x216"
        },
        {
          "width": 288,
          "height": 288,
          "link": "https://i.vimeocdn.com/portrait/28044238_288x288"
        },
        {
          "width": 300,
          "height": 300,
          "link": "https://i.vimeocdn.com/portrait/28044238_300x300"
        },
        {
          "width": 360,
          "height": 360,
          "link": "https://i.vimeocdn.com/portrait/28044238_360x360"
        }
      ],
      "resource_key": "9dc567c0a78075c90cbf876c20b2882bd8b78147",
      "default_picture": false
    },
    "websites": [
      {
        "uri": "/users/33581873/links/4506773",
        "name": "Website",
        "link": "www.taggcreative.com",
        "type": "link",
        "description": null
      },
      {
        "uri": "/users/33581873/links/4506774",
        "name": "Facebook",
        "link": "www.facebook.com/taggvancouver",
        "type": "facebook",
        "description": null
      },
      {
        "uri": "/users/33581873/links/4506775",
        "name": "Twitter",
        "link": "twitter.com/taggmakesads",
        "type": "twitter",
        "description": null
      }
    ],
    "metadata": {
      "connections": {
        "albums": {
          "uri": "/users/33581873/albums",
          "options": [ "GET" ],
          "total": 0
        },
        "appearances": {
          "uri": "/users/33581873/appearances",
          "options": [ "GET" ],
          "total": 0
        },
        "categories": {
          "uri": "/users/33581873/categories",
          "options": [ "GET" ],
          "total": 0
        },
        "channels": {
          "uri": "/users/33581873/channels",
          "options": [ "GET" ],
          "total": 0
        },
        "feed": {
          "uri": "/users/33581873/feed",
          "options": [ "GET" ]
        },
        "followers": {
          "uri": "/users/33581873/followers",
          "options": [ "GET" ],
          "total": 14
        },
        "following": {
          "uri": "/users/33581873/following",
          "options": [ "GET" ],
          "total": 1
        },
        "groups": {
          "uri": "/users/33581873/groups",
          "options": [ "GET" ],
          "total": 0
        },
        "likes": {
          "uri": "/users/33581873/likes",
          "options": [ "GET" ],
          "total": 0
        },
        "membership": {
          "uri": "/users/33581873/membership/",
          "options": [ "PATCH" ]
        },
        "moderated_channels": {
          "uri": "/users/33581873/channels?filter=moderated",
          "options": [ "GET" ],
          "total": 0
        },
        "portfolios": {
          "uri": "/users/33581873/portfolios",
          "options": [ "GET" ],
          "total": 0
        },
        "videos": {
          "uri": "/users/33581873/videos",
          "options": [ "GET" ],
          "total": 57
        },
        "watchlater": {
          "uri": "/users/33581873/watchlater",
          "options": [ "GET" ],
          "total": 1
        },
        "shared": {
          "uri": "/users/33581873/shared/videos",
          "options": [ "GET" ],
          "total": 0
        },
        "pictures": {
          "uri": "/users/33581873/pictures",
          "options": [ "GET", "POST" ],
          "total": 1
        },
        "watched_videos": {
          "uri": "/me/watched/videos",
          "options": [ "GET" ],
          "total": 0
        },
        "folders_root": {
          "uri": "/users/33581873/folders/root",
          "options": [ "GET" ]
        },
        "folders": {
          "uri": "/users/33581873/folders",
          "options": [ "GET", "POST" ],
          "total": 1
        },
        "teams": {
          "uri": "/users/33581873/teams",
          "options": [ "GET" ],
          "total": 1
        },
        "block": {
          "uri": "/me/block",
          "options": [ "GET" ],
          "total": 0
        }
      }
    },
    "location_details": {
      "formatted_address": "Vancouver BC",
      "latitude": null,
      "longitude": null,
      "city": null,
      "state": null,
      "neighborhood": null,
      "sub_locality": null,
      "state_iso_code": null,
      "country": null,
      "country_iso_code": null
    },
    "skills": [  ],
    "available_for_hire": true,
    "can_work_remotely": true,
    "preferences": {
      "videos": {
        "privacy": {
          "view": "unlisted",
          "comments": "anybody",
          "embed": "public",
          "download": true,
          "add": true
        }
      }
    },
    "content_filter": [
      "language",
      "drugs",
      "violence",
      "nudity",
      "safe",
      "unrated"
    ],
    "resource_key": "d988f97b49f95aef7f80d80deaade58185d0e5cd",
    "account": "plus"
  },
  "parent_folder": null,
  "last_user_action_event_date": "2020-03-16T23:00:40+00:00",
  "review_page": {
    "active": true,
    "link": "https://vimeo.com/taggcreative/review/291998673/b2cd9a5d83"
  },
  "app": {
    "name": "Parallel Uploader",
    "uri": "/apps/87099"
  },
  "status": "available",
  "resource_key": "442a972a6ab911efe9c6294fa852e6275a3a9691",
  "upload": {
    "status": "complete",
    "link": null,
    "upload_link": null,
    "complete_uri": null,
    "form": null,
    "approach": null,
    "size": null,
    "redirect_url": null
  },
  "transcode": { "status": "complete" },
  "is_playable": true
}
*/
