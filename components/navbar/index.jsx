/* eslint-disable no-undef */
/* eslint-disable react/prop-types */


import React, { useContext } from 'react';
import Link from 'next/link'
import { IoLogoGithub,IoLogoTwitter ,IoMdMoon,IoIosSunny} from "react-icons/io";
import { TiThMenu } from "react-icons/ti";


import { Container, ActionButtons, Button,MenuButton,Wrapper, Links } from './styles';
import {Logo} from '../logo'
import logo from "../../img/logo.svg";
import { ThemeContext } from "../providers/themeContext";

function Navbar({setOpen}) {

  const {setTheme, theme} =  useContext(ThemeContext)

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

          <MenuButton onClick={setOpen}>
            <TiThMenu />
          </MenuButton>

        </ActionButtons>
      </Container>
    </Wrapper>
  );
}

export default Navbar;