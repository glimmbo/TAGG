const withImages = require("next-images")

module.exports = withImages({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer)
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        // config.node = {
        //   fs: "empty",
        // }
      }
    return config
  },
})
