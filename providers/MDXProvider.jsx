import React from 'react'
import { MDXProvider } from '@mdx-js/react'


const mdComponents = {
  //components to mdx
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
