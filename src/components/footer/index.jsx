import React from 'react'
import Link from 'next/link';
import {Container, FooterContent, FooterInformation, FooterLogo} from './styles'
import {Logo} from '../logo'
import config from '../../config';


export default function Footer(){

   return(
     <Container>
       <FooterContent>
         <FooterLogo>
            <Logo>
              {config.logo}
            </Logo>
            <span className="footer-text">{config.footerText}</span>
         </FooterLogo>
         <FooterInformation>
           <h1>Docs</h1>
           <Link href={`${config.path}docs`}>Getting stated</Link>
           <Link href={`${config.path}api`}>API</Link>
           <Link href={`${config.path}docs`}>Docs</Link>
         </FooterInformation>
         <FooterInformation>
           <h1>Community</h1>
           <Link href={config.repository}>Github</Link>
           <Link href={`${config.repository}/issues`}>Request a feature</Link>
           <Link href={`${config.repository}/issues`}>Report a bug</Link>
           <Link href={`${config.repository}`}>Leave us a start</Link>
         </FooterInformation>
       </FooterContent>
     </Container>
   )
}