/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
   display:flex;
   width:${({open})=> open? "200px": 0};
   height:calc(100vh - 60px);
   flex-shrink: 0;
   background-color:${({theme})=> theme.colors.white};
   border-right:1px solid ${({theme})=> theme.colors.greyLight};
   flex-direction:column;
   padding-top:20px;
   position:relative;
   transform: 0.5s ease;
`

export const Indicator = styled.div`
   height:10px;
   width:10px;
   border-radius:50%;
   background-color:${({theme})=> theme.colors.secondary};
   margin:10px;
`

export const Item = styled.div`
   display:flex;
   align-items:center;
   justify-content:flex-start;
   padding:15px;

   & span{
      cursor: pointer;
      color:${({theme})=> theme.colors.secondary};
      font-size:16px;
      font-weight:400;
   }

   &:hover{
      ${Indicator}{
         background-color:${({theme})=> theme.colors.primary};
      }
      span{
         color:${({theme})=> theme.colors.primary};
      }
   }

`
