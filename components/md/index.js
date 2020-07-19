/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const H1 = styled.h1`
   font-size:2em;
   color:${({theme})=> theme.colors.textColor};
   font-weight:bold;
   line-height:1.25;
`

export const H2 = styled.h2`
   font-size:1.5em;
   color:${({theme})=> theme.colors.textColor};
   font-weight:bold;
   line-height:1.25;
`

export const H3 = styled.h2`
   font-size:1.3rem;
   color:${({theme})=> theme.colors.textColor};
   font-weight:bold;
   line-height:1.25em;
`

export const H4 = styled.h2`
   font-size:1rem;
   color:${({theme})=> theme.colors.textColor};
   font-weight:bold;
   line-height:1.25em;
`

export const P = styled.p`
   font-size:1rem;
   font-weight:normal;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   margin-top: 0;
`
export const StyledPre = styled.div`
   display:inline;
   span{
      background-color:${({theme})=> theme.colors.bkgPre};
      border-radius:.3rem;
      font-size:.75rem;
      font-family:Monospace;
      padding: 0.125rem 0.25rem;
      display:inline; */
      color:${({theme})=> theme.colors.textColor};
   }
`

export function Pre({children}){
   return (
     <StyledPre>
       <span>{children}</span>
     </StyledPre>
   )
}