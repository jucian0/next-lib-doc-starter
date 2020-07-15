

import React from 'react';
import Link from 'next/link'
import { IoLogoGithub,IoLogoTwitter ,IoMdMoon} from "react-icons/io";


import { Container, Logo, ActionButtons, Button } from './styles';
import logo from "../../img/logo.svg";

function Navbar() {
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
      </ActionButtons>
    </Container>
  );
}

export default Navbar;