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
        link:'/doc/input0'
      }
    ]
  },
  {
    label:'API',
    link:'',
    subItems:[
      {
        label:'useForm()',
        link:'/doc/use-form'
      },
      {
        label:'useFormContext',
        link:'/doc/use-form-context'
      },
      {
        label:'useValidation()',
        link:'/doc/use-validation'
      },
      {
        label:'<ContextForm/>',
        link:'/doc/context-form'
      },
    ]
  },
  {
    label:'Examples',
    link:'',
    subItems:[
      {
        label:'Controlled form',
        link:'/doc/controlled-form'
      },
      {
        label:'Debounced form',
        link:'/doc/debounced-form'
      },
      {
        label:'Uncontrolled form',
        link:'/doc/uncontrolled-form'
      },
      {
        label:'Validation',
        link:'/doc/validation-form'
      },
      {
        label:'Custom fields',
        link:'/doc/custom-fields'
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
              <ActiveLink href="/">{subItem.label}</ActiveLink>
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