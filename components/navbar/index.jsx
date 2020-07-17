

import React from 'react';
import Link from 'next/link'
import { IoLogoGithub,IoLogoTwitter ,IoMdMoon} from "react-icons/io";
import { TiThMenu } from "react-icons/ti";


import { Container, Logo, ActionButtons, Button,MenuButton } from './styles';
import logo from "../../img/logo.svg";

function Navbar({setOpen}) {
  return (
    <Container>
      <Link href="/">
        <Logo>
          <img src={logo} alt="logo" />
          <span>UseForm</span>
        </Logo>
      </Link>
      <ActionButtons>
        <Button>
          <IoLogoTwitter />
        </Button>
        <Button>
          <IoLogoGithub />
        </Button>
        <Button>
          <IoMdMoon />
        </Button>

        <MenuButton onClick={setOpen}>
          <TiThMenu />
        </MenuButton>

      </ActionButtons>
    </Container>
  );
}

export default Navbar;