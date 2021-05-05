import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../codeblock'
import { H1, H2, P, Pre, H3, H4,UL,LI,A, Table,Image } from '../md'

const mdComponents = {
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul:UL,
  li:LI,
  a:A,
  img:Image,
  table:Table,
  Inline: Pre,
}

export default ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
)
