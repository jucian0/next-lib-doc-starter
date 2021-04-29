import React from 'react'
import Link from 'next/link';
import {Container, FooterContent, FooterInformation, FooterLogo} from './styles'
import {Logo} from '../logo'
import logo from "../../img/logo.svg";


export default function Footer(){

   return(
     <Container>
       <FooterContent>
         {/* <FooterInformation>
           <span><Link href="/">Let's start</Link></span>
           <span><Link href="/">Github</Link></span>
           <span><Link href="/">Twitter</Link></span>
           <span><Link href="/">Version</Link></span>
         </FooterInformation>
         <FooterLogo>
           <Logo>
             <img src={logo} alt="logo" />
             <span>UseForm</span>
           </Logo>
         </FooterLogo> */}
         <FooterLogo>
           <Logo>
             <img src={logo} alt="logo" />
             <span>UseForm</span>
           </Logo>
         </FooterLogo>
         <FooterInformation>
           <h1>Social</h1>
           <Link href="/">Let's start</Link>
           <Link href="/">Github</Link>
           <Link href="/">Twitter</Link>
           <Link href="/">Version</Link>
         </FooterInformation>
         <FooterInformation>
           <h1>Community</h1>
           <Link href="/">Let's start</Link>
           <Link href="/">Github</Link>
           <Link href="/">Twitter</Link>
           <Link href="/">Version</Link>
         </FooterInformation>
       </FooterContent>
     </Container>
   )
}