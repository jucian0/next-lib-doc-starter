/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { ThemeProvider } from 'styled-components'
import MDXProvider from '../providers/MDXProvider'
import { theme, GlobalStyle } from '../providers/theme'


export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
    <GlobalStyle />
  </ThemeProvider>
)
