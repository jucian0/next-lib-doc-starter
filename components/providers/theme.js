/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components'
import { ScrollBar } from '../scrollbar'

export const lightTheme = {
  colors: {
    primary: '#2ec4b6',
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
      overflow:hidden;
      width: 100%;
      height: 100%;
      background-color:${({ theme }) => theme.colors.background};
   }
`
