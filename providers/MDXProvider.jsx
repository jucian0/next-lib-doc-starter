/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from "../components/codeblock/index"
import { H1, H2, P,Pre } from '../components/md'



const mdComponents = {
  code:CodeBlock,
  h1: H1,
  h2:H2,
  p:P,
  pre:Pre
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
