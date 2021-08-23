import { Vimeo } from "vimeo"
import { config } from "dotenv"

// add .env file to process in dev
config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const TAGG_ID = process.env.TAGG_ID
export const vimeoClient = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)

// === Vimeo API Calls Used === //

/* Authentication
 If you need to generate another credientials set,
 console.log the variables from this request and save them
 to the .env file at the root. This can also be done on the
 Vimeo website.

 `scope` is an array of permissions your token needs to access. You
 can read more at https://developer.vimeo.com/api/authentication#supported-scopes
*/

// const getToken = async () => {
//   const token = await new Promise((resolve, reject) => {
//     vimeoClient.generateClientCredentials(["public"], (err, response) => {
//       if (err) {
//         reject(err)
//       }

//       const token = response.access_token
//       //  Other useful information is included alongside the access token,
//       //  which you can dump out to see, or visit our API documentation.

//       const scopes = response.scope
//       //  We include the final scopes granted to the token. This is
//       //  important because the user, or API, might revoke scopes during
//       //  the authentication process.

//       console.log(scopes)
//       console.log(token)
//       resolve(token)
//     })
//   })
//   vimeoClient.setAccessToken(token)
// }
// getToken()

// featured-clips-9-16 showcase for mobile carousel
export const getClipsMobile = async (album_id = "8493940") => {
  const clipList = await new Promise((resolve, reject) => {
    vimeoClient.request(
      `/users/${TAGG_ID}/albums/${album_id}/videos`,
      (error, body, status_code, headers) => {
        console.log("getClipsMobile:", status_code)
        if (error) {
          console.error(error)
          reject(error)
        }
        resolve(JSON.parse(JSON.stringify(body?.data)))
      },
    )
  })
  return clipList
}

//  featured-clips-16-9 showcase for desktop carousel
export const getClipsDesktop = async (album_id = "8493934") => {
  const clipList = await new Promise((resolve, reject) => {
    vimeoClient.request(
      `/users/${TAGG_ID}/albums/${album_id}/videos`,
      (error, body, status_code, headers) => {
        console.log("getClipsDesktop:", status_code)
        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(body?.data)))
      },
    )
  })
  return clipList
}

// featured-works showcase
export const getWorks = async (album_id = "8478566") => {
  const videoList = await new Promise((resolve, reject) => {
    vimeoClient.request(
      `/users/${TAGG_ID}/albums/${album_id}/videos`,
      (error, body, status_code, headers) => {
        console.log("getWorks:", status_code)
        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(body?.data)))
      },
    )
  })
  return videoList
}

export const getWork = async (id) => {
  const video = await new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: "GET",
        path: `/videos/${id}`,
        userId: TAGG_ID,
      },
      (error, body, status_code, headers) => {
        console.log("getWork:", status_code)
        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(body)))
      },
    )
  })
  return video
}

// Thumbnails:
// Create a new set: Go to the advanced settings of a video from vimeo.com to create
// The site will use the most recently created thumbnail.
export const getMostRecentAnimatedThumb = async (uri) => {
  const gifs = await new Promise((resolve, reject) => {
    vimeoClient.request(
      {
        method: "GET",
        path: `${uri}/animated_thumbsets`,
        userId: TAGG_ID,
      },
      (error, body, status_code, headers) => {
        console.log("getAnimatedThumbs:", status_code)
        if (error) {
          console.error(error)
          reject(error)
        }

        resolve(JSON.parse(JSON.stringify(body)))
      },
    )
  })

  // return most recent
  return gifs.data.sort(
    (thumbA, thumbB) => thumbB.created_on - thumbA.created_on,
  )[0]
}
