/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../codeblock'
import { H1, H2, P, Pre, H3, H4 } from '../md'

const mdComponents = {
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  Inline: Pre,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
