/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'


const Main = styled.main`
  display:flex;
  flex:1;
  flex-direction:column;
  width:100%;
  height:100%;
`

const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`
const MainContent = styled.div`
  display:flex;
  width: 100%;
  position:relative;
  height:100%;
  justify-content:center;
  float:left;
  left:${({open})=> open? "0":"-200px"};
  transition: left 0.5s ease-in-out;
`

const Content = styled.div`
  display:block;
  width:100%;
  height:100%;
  padding:40px;
  max-width:1440px;
`

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {

  const [open, setOpen] = useState(true)

  const resize = ()=>{
    if(window?.innerWidth > 989){
      setOpen(true)
    }else if (window?.innerWidth <= 989){
      setOpen(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', resize)
    resize()
  },[])

  return (
    <Main>
      <Navbar setOpen={()=>setOpen(!open)}/>
      <Container>
        <Sidebar open={open}/>
        <MainContent open={open}>
          <Content>
            {children}
          </Content>
        </MainContent>
      </Container>
    </Main>
  )
}
