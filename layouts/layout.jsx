import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'


const Main = styled.main`
  display:flex;
  flex:1;
`

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`

const MainContent = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`

const Content = styled.div`
  display:block;
  width:100%;
  height:100%;
  padding:40px;
`

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <Main>
      <Container>
        <Navbar />
        <MainContent>
          <Sidebar />
          <Content>
            {children}
          </Content>
        </MainContent>
      </Container>
    </Main>
  )
}
