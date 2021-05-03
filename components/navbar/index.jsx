import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { IoLogoGithub,IoLogoTwitter ,IoMdMoon,IoIosSunny} from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import {MdDragHandle} from 'react-icons/md';
import { useRouter } from 'next/router';


import { Container, ActionButtons, Button,MenuButton,Wrapper, Links, MobileLink } from './styles';
import {Logo} from '../logo'
import logo from "../../img/logo.svg";
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
        <Link href="/">
          <Logo>
            <img src={logo} alt="logo" />
            <span>UseForm</span>
          </Logo>
        </Link>
        <Links>
          <Link href="/docs">Doc</Link>
          <Link href="/docs">Doc</Link>
        </Links>
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
            route !== '/' && (
            <MenuButton onClick={setOpen}>
              <TiThMenu />
            </MenuButton>
          )
}
        </ActionButtons>
      </Container>
      <MobileLink isOpen={mobile}>
        <div>
          <Link href="/docs">Doc</Link>
          <Link href="/docs">Doc</Link>
        </div>
        <button type="button" onClick={()=>setMobile(!mobile)}>
          <MdDragHandle color={lightTheme.colors.primary} />
        </button>
      </MobileLink>
    </Wrapper>
  );
}

export default Navbar;