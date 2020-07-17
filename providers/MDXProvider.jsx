/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from "../components/codeblock/index"



const mdComponents = {
  code:CodeBlock
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
