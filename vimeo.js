import { Vimeo } from "vimeo"
import { config } from "dotenv"
// add .env file to process
config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const TAGG_ID = process.env.TAGG_ID
const vimeoClient = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)

// If you need to generate another credientials set,
// console.log the variables from this request and save them
// to the .env file at the root. This can also be done on the
//  Vimeo website.

// `scope` is an array of permissions your token needs to access. You
// can read more at https://developer.vimeo.com/api/authentication#supported-scopes
// vimeoClient.generateClientCredentials(["public"], (err, response) => {
//   if (err) {
//     throw err
//   }

//   const token = response.access_token

//   // Other useful information is included alongside the access token,
//   // which you can dump out to see, or visit our API documentation.

//   // We include the final scopes granted to the token. This is
//   // important because the user, or API, might revoke scopes during
//   // the authentication process.

//   const scopes = response.scope
// })

export { vimeoClient, TAGG_ID }
