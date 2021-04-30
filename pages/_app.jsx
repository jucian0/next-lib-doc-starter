/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import MDXProvider from '../components/providers/MDXProvider'
import { lightTheme, GlobalStyle, darkTheme } from '../components/providers/theme'
import {ThemeContext} from '../components/providers/themeContext'
import Default from '../components/layouts/layout'


export default ({ Component, pageProps }) => {
  
  const [theme, setTheme] = useState('light')

  function handleTheme(selectedTheme){
    if (typeof window !== "undefined") {
      setTheme(selectedTheme)
      localStorage.setItem('theme', selectedTheme)
    }
  }
  
  useLayoutEffect(()=>{

    if (typeof window !== "undefined") {
    
      const currentTheme = localStorage.getItem('theme')
          handleTheme(currentTheme||'light')
      }

  },[])

  return(
    <ThemeContext.Provider value={{theme, setTheme:handleTheme}}>
      <ThemeProvider theme={theme ==='light'? lightTheme: darkTheme}>
        <MDXProvider>
          <Default>
            <Component {...pageProps} />
          </Default>
        </MDXProvider>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
