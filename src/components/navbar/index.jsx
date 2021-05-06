import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { IoLogoGithub,IoLogoTwitter ,IoMdMoon,IoIosSunny} from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import {MdDragHandle} from 'react-icons/md';
import { useRouter } from 'next/router';
import  Config from '../../config';

import { Container, ActionButtons, Button,MenuButton,Wrapper, Links, MobileLink } from './styles';
import {Logo} from '../logo'
import { ThemeContext } from "../providers/themeContext";
import {lightTheme} from '../providers/theme'

function Navbar({setOpen}) {

  const {setTheme, theme} =  useContext(ThemeContext)
  const {route} = useRouter()
  const [mobile,setMobile] = useState(false)

  function handleTheme(){
      const selectedTheme = theme === 'light'? 'dark':'light'
      setTheme(selectedTheme)
  }
  
  return (
    <Wrapper>
      <Container>
        <div>
        <Link href={Config.path}>
          <Logo>
            {Config.logo}
          </Logo>
        </Link>
        <Links>
        {
          Config.navLinks.map(item=>(
            <Link href={item.path}>{item.label}</Link>
          ))
        }
        </Links>
        </div>
        <ActionButtons>
          <Button>
            <IoLogoTwitter />
          </Button>
          <Button>
            <IoLogoGithub />
          </Button>
          <Button onClick={handleTheme}>
            {theme ==='light' ? <IoMdMoon />:<IoIosSunny />}
          </Button>
          {
            route !== Config.path && (
              <MenuButton onClick={setOpen}>
                <TiThMenu />
              </MenuButton>
            )
          }
        </ActionButtons>
      </Container>
      <MobileLink isOpen={mobile}>
        <div>
        {
          Config.navLinks.map(item=>(
            <Link href={item.path}>{item.label}</Link>
          ))
        }
        </div>
        <button type="button" onClick={()=>setMobile(!mobile)}>
          <MdDragHandle color={lightTheme.colors.primary} />
        </button>
      </MobileLink>
    </Wrapper>
  );
}

export default Navbar;