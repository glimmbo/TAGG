const withImages = require("next-images")

module.exports = withImages({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }

    // svg loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
})
