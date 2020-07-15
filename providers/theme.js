/* eslint-disable import/prefer-default-export */
import {createGlobalStyle} from 'styled-components'

export const theme = {
   colors:{
      primary: "#5bc0be",
      secondary: "#3a506b",
      dark:"#0b132b",
      greyLight:"#edf2f4",
      red:"#e71d36"
   }
}

export const GlobalStyle = createGlobalStyle`

   @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box 
   }


   html, body {
      width: 100%;
      height: 100%;
   }

`