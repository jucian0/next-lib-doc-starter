/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../footer'

import Navbar from '../navbar'
import Sidebar from '../sidebar'

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items:center;
  width: 100%;
`

const MainContainer = styled.div`
  max-width:1440px;
  width:100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
const MainContent = styled.div`
  display: flex;
  width: ${({ open }) => (!open ? '100%' : 'calc(100% - 240px)')};
  height: calc(100% - 60px);
  position: sticky;
  justify-content: center;
  float: left;
  left: ${({ open }) => (open ? '240px' : '0')};
  transition: all 0.5s ease-in-out;
`

const Content = styled.div`
  display: block;
  width: 100%;
  padding: 40px;
  max-width: 1040px;
  background-color: ${({ theme }) => theme.colors.bkgContent};
`

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  const [open, setOpen] = useState(true)

  const resize = () => {
    if (window?.innerWidth > 989) {
      setOpen(true)
    } else if (window?.innerWidth <= 989) {
      setOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()
  }, [])


  return (
    <>
      <Navbar setOpen={() => setOpen(!open)} />
      <Main>
        <MainContainer>
          <Container>
            <Sidebar open={open} />
            <MainContent open={open}>
              <Content>{children}</Content>
            </MainContent>
          </Container>
        </MainContainer>
      </Main>
      <Footer />
    </>
  )
}
