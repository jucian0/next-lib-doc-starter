import { createGlobalStyle } from 'styled-components'
import { ScrollBar } from '../scrollbar'

export const lightTheme = {
  colors: {
    primary: '#2ec4b6',
    primaryHover:'#29B0A3',
    secondary: '#3a506b',
    dark: '#0b132b',
    border: '#edf2f4',
    red: '#e71d36',
    background: '#FFFFFF',
    textColor: '#4b5563',
    headingColor:'#111827',
    bkgPre: '#edf2f4',
    colorPre: '#edf2f4',
    bkgScrollbar: '#3a506b',
  },
}

export const darkTheme = {
  colors: {
    primary: '#2ec4b6',
    primaryHover:'#29B0A3',
    secondary: '#3a506b',
    dark: '#0b132b',
    border: '#1b262c',
    red: '#e71d36',
    background: '#1c2128',
    textColor: '#edf2f4',
    headingColor:'#edf2f4',
    bkgPre: '#3a506b',
    colorPre: '#edf2f4',
    bkgScrollbar: '#3a506b',
  },
}

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      ${ScrollBar};
      outline:none;
      box-sizing: border-box;
   }
   html, body {
      width: 100%;
      height: 100%;
      background-color:${({ theme }) => theme.colors.background};
   }

   h1{
    font-size: 1.875rem;
    line-height: 2.25rem;
    }

   a{
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.secondary};
   }

   p{
    margin-top: 1.25em;
    margin-bottom: 1.25em;
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.textColor};
   }

   strong{
     font-weight:500;
   }

   line-height, ul {
    font-size: 1rem;
    line-height: 1.75;
    color:${({theme})=> theme.colors.textColor};
   }
`
