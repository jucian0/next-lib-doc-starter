/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MDXProvider from '../components/providers/MDXProvider'
import { lightTheme, GlobalStyle, darkTheme } from '../components/providers/theme'
import {ThemeContext} from '../components/providers/themeContext'
import DocsLayout from '../components/layouts/docsLayout'
import HomeLayout from '../components/layouts/homeLayout'
import fav from '../img/green_logo.svg'
import lib_logo from '../img/lib_logo.png'


function MyHead(){
  return(
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
        <meta name="twitter:title" content="TITLE_FOR_YOUR_PAGE" />
        <meta name="twitter:description" content="DESCRIPTION_FOR_YOUR_PAGE" />
        <meta name="twitter:image" content={lib_logo} />
        <link rel="shortcut icon" href={fav} />
    </Head>
  )
}


export default ({ Component, pageProps }) => {
  
  const [theme, setTheme] = useState('light')
  const router = useRouter()
  const pathname = router?.pathname


  if (!pathname) {
    throw new Error('pathname undefined')
}

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


  if(pathname.startsWith('/doc')){
    return(
      <ThemeContext.Provider value={{theme, setTheme:handleTheme}}>
        <ThemeProvider theme={theme ==='light'? lightTheme: darkTheme}>
          <MDXProvider>
            <MyHead />
            <DocsLayout>
              <Component {...pageProps} />
            </DocsLayout>
          </MDXProvider>
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    )
  }

  return(
    <ThemeContext.Provider value={{theme, setTheme:handleTheme}}>
      <ThemeProvider theme={theme ==='light'? lightTheme: darkTheme}>
        <MDXProvider>
          <MyHead />
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </MDXProvider>
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
