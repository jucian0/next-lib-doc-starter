/* eslint-disable react/prop-types */
import React, { useContext, useMemo } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Container, Item, SubList,Item2 } from './styles';


const links = [
  {
    link:'input',
    name:'Input',
    sublink:[
      {
        link:'input',
        name:'Input'
      },
      {
        link:'input',
        name:'Input'
      },
      {
        link:'input',
        name:'Input'
      },
    ]
  },
  {
    link:'input',
    name:'Input'
  },
  {
    link:'input',
    name:'Input'
  },
  {
    link:'input',
    name:'Input'
  },
  {
    link:'input',
    name:'Input'
  },
]


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
      {
        links.map(link=>(
          <Item2 key={link.name}>
            <SubList>
              {
            link.name
          }
              {
            link.sublink?.map(sub=>(
              <ActiveLink key={sub.name} href={sub.link}>
                {
            sub.name
          }
              </ActiveLink>
            ))
          }
            </SubList>
          </Item2>
        ))
      }

    </Container>
  );
}

export default Sidebar;