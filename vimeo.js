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

/*
 If you need to generate another credientials set,
 console.log the variables from this request and save them
 to the .env file at the root. This can also be done on the
  Vimeo website.

 `scope` is an array of permissions your token needs to access. You
 can read more at https://developer.vimeo.com/api/authentication#supported-scopes
*/
export function createCreds() {
  vimeoClient.generateClientCredentials(["public"], (err, response) => {
    if (err) {
      throw err
    }

    const token = response.access_token
    //  Other useful information is included alongside the access token,
    //  which you can dump out to see, or visit our API documentation.

    const scopes = response.scope
    //  We include the final scopes granted to the token. This is
    //  important because the user, or API, might revoke scopes during
    //  the authentication process.
  })
}

// Video IDs:
// This is an array of the IDs that will be shown on the site. Until I find GET /{album}
export const videolist = [{ id: 291998673, uri: "/video/291998673" }]
// TroyBoi = 291998673

// Thumbnails:
// Create a new set: POST/videos/{video_id}/animated_thumbsets body: {duration: <1-6(sec)>, start_time: <0(sec)>}
// or just go to the advanced settings of a video from vimeo.com and create one manually.
// Once finished making, GET https://api.vimeo.com/videos/{video_id}/animated_thumbsets
// The site will use the most recently created thumbnail.

// Embed Privacy?? whitelist tagg.vercel.app
