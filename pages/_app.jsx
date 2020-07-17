/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MDXProvider from '../providers/MDXProvider'
import { lightTheme, GlobalStyle, darkTheme } from '../providers/theme'

export const ThemeContext = createContext({})

export default ({ Component, pageProps }) => {

  const [theme, setTheme] = useState( true)

  return(
    <ThemeContext.Provider value={{theme, setTheme:()=>setTheme(!theme)}}>
      <ThemeProvider theme={theme? lightTheme: darkTheme}>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
