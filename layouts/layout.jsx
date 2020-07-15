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

const Content = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`

// eslint-disable-next-line react/prop-types
export default function Page({ children }) {
  return (
    <Main>
      <Container>
        <Navbar />
        <Content>
          <Sidebar />
          <div>
            {children}
          </div>
        </Content>
      </Container>
    </Main>
  )
}
