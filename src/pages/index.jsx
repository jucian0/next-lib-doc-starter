import React from 'react'
import { DefaultSeo } from 'next-seo'
import styled from 'styled-components'
import Iframe from 'react-iframe'
import { useRouter } from 'next/router'
import config from '../config'


const Hero = styled.div`
  padding:80px 50px;
  width:100%;
  background-color:${({theme})=> theme.colors.primary};
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  .items{
    padding:20px;
  }

  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:#ffffff;
  }

  p{
    font-size:1.6em;
    font-family: 'Roboto',sans-serif;
    color:#ffffff;
  }

  button{
    border:1px solid #ffffff;
    color:#ffffff;
    font-weight:600;
    font-size:1.3em;
    padding:10px 30px;
    border-radius:5px;
    background-color: ${({theme})=> theme.colors.primary};
    transition:ease 300ms;

    &:hover{
      color: ${({theme})=> theme.colors.primary};
      background-color: #ffffff;
      cursor:pointer;
    }
  }
`

const Section = styled.section`
  padding:100px 50px;
  width:100%;
  background-color:${({theme})=> theme.colors.border};
`

const CodeSandBox = styled.div`
  padding:100px 100px;
  width:100%;
  background-color:${({theme})=> theme.colors.border};
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({theme})=>theme.colors.primary};
    padding:20px;
  }

  div{
    width:1040px;
    padding:2px;
    .sandbox{
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

  `

function Index() {
  const {push} = useRouter()

  function redirect(){
    push('/docs')
  }

  return (
    <div>
      <DefaultSeo
        title="Test Seo Index"
        titleTemplate="%s | Next SEO"
        description="My description"
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Hero>
        <h1>{config.siteName}</h1>
        <p>{config.siteSlogan}</p>
        <button onClick={redirect}>Read docs</button>
      </Hero>
      <CodeSandBox>
        <h1>Try it!</h1>
        <div>
          <Iframe
            url="https://codesandbox.io/embed/useform-forked-9ihe9?fontsize=14&hidenavigation=1&theme=dark"
            width="100%"
            height="700px"
            className="sandbox"
            id="myId"
            display="initial"
            position="relative"
          />
        </div>
      </CodeSandBox>
    </div>
  )
}

export default Index
