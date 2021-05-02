/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useMemo,useState } from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { GoChevronRight } from "react-icons/go";
import { ThemeContext } from 'styled-components';

import { Aside, Item, Items, SubItems, SubItem } from './styles';


const links = [
  {
    label:'Introduction',
    link:'',
    subItems:[
      {
        label:'Quick Start',
        link:'/docs/input'
      }
    ]
  },
  {
    label:'API',
    link:'',
    subItems:[
      {
        label:'firstItem()',
        link:'/docs/api/first-item'
      },
      {
        label:'secondItem',
        link:'/docs/api/second-item'
      },
      {
        label:'lastItem()',
        link:'/docs/api/last-item'
      },
      {
        label:'useExample()',
        link:'/docs/api/use-example'
      },
    ]
  },
  {
    label:'Examples',
    link:'',
    subItems:[
      {
        label:'How to use',
        link:'/docs/usage/first-item'
      },
      {
        label:'Debounced form',
        link:'/docs/usage/second-item'
      },
      {
        label:'Uncontrolled form',
        link:'/docs/usage/last-item'
      },
    ]
  },
]


function ActiveLink({ href,children }){
  const router = useRouter()
  const theme = useContext(ThemeContext)

  const isActive = useMemo(()=> router.pathname === href,[router.pathname, href])

  return (
    <SubItem className={isActive && "active"}>
      <GoChevronRight color={isActive? theme.colors.primary:'transparent'} />
      <Link href={href} className={isActive && "active"}>{children}</Link>
    </SubItem>
  ) 
}


function Sidebar({open}) {

  const [expanded,setExpanded] = useState('')

  return (
    <Aside open={open}>
      <Items>
        {
          links.map(link =>(
            <Item>
              <span onClick={()=>setExpanded('')}>
                {link.label}
              </span>
              {
            expanded === ''
          }
              <SubItems>
                {
            link.subItems?.map(subItem =>(
              <ActiveLink href={subItem.link}>{subItem.label}</ActiveLink>
            ))
          }
              </SubItems>
            </Item>
          ))
        }
      </Items>
    </Aside>
  );
}

export default Sidebar;