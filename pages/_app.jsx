import React from 'react'
import MDXProvider from '../providers/MDXProvider'

export default ({ Component, pageProps }) => (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
)
