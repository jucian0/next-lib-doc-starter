import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   align-items:center;
   padding:100px;
   color:${({theme})=>theme.colors.textColor};
  
   a{
      color:${({theme})=>theme.colors.textColor};
      text-decoration:none;
      font-weight:600;
      font-size:1em;

      &:hover{
         color:${({theme})=>theme.colors.primary};
      }
   }
`

export default function FourOhFour() {
  return <Container>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </Container>
}