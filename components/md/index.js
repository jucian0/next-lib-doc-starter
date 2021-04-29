/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const H1 = styled.h1`
   color:${({theme})=> theme.colors.headingColor};
   font-weight:bold;
   font-size: 2em;
    margin-top: 1.6em;
    margin-bottom: .8em;
    line-height: 1.4;
    scroll-margin-top: 1.6em;
`

export const H2 = styled.h2`
   font-size:1.4285714em;
   color:${({theme})=> theme.colors.headingColor};
   font-weight:bold;
   margin-top: 1.6em;
    margin-bottom: .8em;
    line-height: 1.4;
    scroll-margin-top: 1.6em;
`

export const H3 = styled.h2`
   color:${({theme})=> theme.colors.headingColor};
   font-size: 1.2857143em;
    margin-top: 1.5555556em;
    margin-bottom: .4444444em;
    line-height: 1.5555556;
    scroll-margin-top: 1.5555556em;
`

export const H4 = styled.h2`
   font-size:1rem;
   color:${({theme})=> theme.colors.headingColor};
   font-weight:bold;
   margin-top: 1.6em;
   margin-bottom: .8em;
   line-height: 1.4;
   scroll-margin-top: 1.6em;
`

export const P = styled.p`
   font-weight:normal;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   margin-top: 0;
   margin-top: 1.6em;
   margin-bottom: .8em;
   font-size: 1rem;
   line-height: 1.7142857;
   scroll-margin-top: 1.6em;
`
export const StyledPre = styled.div`
   display:inline;
   span{
      background-color:${({theme})=> theme.colors.bkgPre};
      border-radius:.3rem;
      font-size:.75rem;
      font-family:Monospace;
      padding: 0.125rem 0.25rem;
      display:inline;
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