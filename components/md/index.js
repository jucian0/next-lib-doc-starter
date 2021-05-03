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
   font-weight:400;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   margin-top: 1.6em;
   margin-bottom: .8em;
   font-size: 1rem;
   line-height: 1.7142857;
   scroll-margin-top: 1.6em;
`

export const A = styled.a`
   font-weight:600;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   margin-top: 1.6em;
   margin-bottom: .8em;
   font-size: 1rem;
   line-height: 1.7142857;
   scroll-margin-top: 1.6em;
   text-decoration:none;
   &:hover{
      color:${({theme})=> theme.colors.primary};
   }
`

export const UL = styled.ul`
   font-weight:400;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   font-size: 1rem;
   scroll-margin-top: 1.6em;
`

export const LI = styled.li`
   font-weight:400;
   color:${({theme})=> theme.colors.textColor};
   box-sizing: border-box;
   font-size: 1rem;
   scroll-margin-top: 1.6em;
   list-style-type: circle;
`

export const IMG = styled.img`
   border-radius: 0.5rem;
   box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
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

export const Table = styled.table`
   width: 100%;
   border-spacing: 0;
   border-collapse: collapse;
   color: ${({theme})=>theme.colors.textColor};

   td, th {
        &:first-child {
            padding-left: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }

        &:last-child {
            padding-right: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }
   }

   thead {
        tr {
            font-size: 1em;
            border-bottom: solid 0.063rem ${({theme})=>theme.colors.border};
            line-height: 2.5rem;
            text-align: left;
        }
   }

   tbody {
        tr {
            font-size: 1em;
            line-height: 2.5rem;
            border-bottom: solid 0.063rem ${({theme})=>theme.colors.border};
            will-change: red;
        }
	}
`

export function Pre({children}){
   return (
     <StyledPre>
       <span>{children}</span>
     </StyledPre>
   )
}