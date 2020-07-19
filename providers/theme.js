/* eslint-disable import/prefer-default-export */
import {createGlobalStyle} from 'styled-components'

import {ScrollBar} from "../components/scrollbar"

export const lightTheme = {
   colors:{
      primary: "#5bc0be",
      secondary: "#3a506b",
      dark:"#0b132b",
      border:"#edf2f4",
      red:"#e71d36",
      background:"#FFFFFF",
      textColor:"#3a506b",
      bkgPre:"#edf2f4",
      colorPre:"#edf2f4"
   }
}

export const darkTheme = {
   colors:{
      primary: "#5bc0be",
      secondary: "#3a506b",
      dark:"#0b132b",
      border:"#1b262c",
      red:"#e71d36",
      background:"#0b132b",
      textColor: "#edf2f4",
      bkgPre:"#3a506b",
      colorPre:"#edf2f4"
   }
}

export const GlobalStyle = createGlobalStyle`

   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      color:${({theme})=> theme.colors.textColor};

      ${ScrollBar}
   }


   html, body {
      width: 100%;
      height: 100%;
      background-color:${({theme})=> theme.colors.background};
   }

`