/* eslint-disable react/prop-types */
import React, { useContext, useMemo } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Container, Item } from './styles';

function ActiveLink({ href,children }){
  const router = useRouter()
  const theme = useContext(ThemeContext)

  const isActive = useMemo(()=> router.pathname === href,[router.pathname, href])

  return (
    <Item className={isActive && "active"}>
      <GoChevronRight color={isActive? theme.colors.primary:'transparent'} />
      <Link href={href} className={isActive && "active"}>{children}</Link>
    </Item>
  ) 
}


function Sidebar({open}) {

  return (
    <Container open={open}>
      <ActiveLink href="/doc/input0">
        Input 0
      </ActiveLink>
      <ActiveLink href="/doc/input1">
        Input 1
      </ActiveLink>      
      <ActiveLink href="/doc/input2">
        Input 2
      </ActiveLink>      
      <ActiveLink href="/doc/input3">
        Input 3
      </ActiveLink>      
      <ActiveLink href="/doc/input4">
        Input 4
      </ActiveLink>      
      <ActiveLink href="/doc/input5">
        Input 5
      </ActiveLink>      
      <ActiveLink href="/doc/input6">
        Input 6
      </ActiveLink>
      <ActiveLink href="/doc/input7">
        Input 7
      </ActiveLink>
      <ActiveLink href="/doc/input8">
        Input 8
      </ActiveLink>
    </Container>
  );
}

export default Sidebar;