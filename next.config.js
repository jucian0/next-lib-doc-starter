const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
const withImages = require('next-images')

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
})


module.exports = withImages({
  webpack(config, options) {
    return config
  }
})