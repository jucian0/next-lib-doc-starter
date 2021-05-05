import Link from 'next/link'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'

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
         <DefaultSeo
        title="404 Page not found"
        titleTemplate="%s | Next SEO"
        description="Page not found"
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </Container>
}