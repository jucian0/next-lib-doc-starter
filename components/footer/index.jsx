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
           <h1>Docs</h1>
           <Link href="/">Getting stated</Link>
           <Link href="/">API</Link>
           <Link href="/">Docs</Link>
         </FooterInformation>
         <FooterInformation>
           <h1>Community</h1>
           <Link href="/">Github</Link>
           <Link href="/">Request a feature</Link>
           <Link href="/">Report a bug</Link>
           <Link href="/">Leave a start</Link>
         </FooterInformation>
       </FooterContent>
     </Container>
   )
}