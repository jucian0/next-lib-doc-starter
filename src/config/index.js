import React from 'react'
import logo from "../../public/green_logo.svg";
import lib_logo from '../../public/lib_logo.png';
import fav from '../../public/green_logo.svg';
import Head from 'next/head'

export default {
  repository: 'https://github.com/jucian0/next-lib-doc-starter',
  docsRepository: 'https://github.com/jucian0/next-lib-doc-starter',
  branch: 'master',
  siteName:'Next lib starter',
  siteSlogan:'A starter project for library documentation made with nextjs.',
  path: '/',
  titleSuffix: ' – Next lib starter',
  nextLinks: true,
  prevLinks: true,
  navLinks:[{
     label:'Docs',
     path:'/docs',
  },
  {
     label:'Blog',
     path:'/blog'
  }
],
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  footerText: 'MIT 2020 © Next lib starter.',
  footerEditOnGitHubLink: true,
  logo: (
    <React.Fragment>
      <img src={logo} alt="logo" />
      <span className="mr-2 font-extrabold hidden md:inline">Next lib starter</span>
    </React.Fragment>
  ),
  head: (
    <Head>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Next lib starter: A nextjs doc stater template" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@juciano_barbosa" />
      <meta property="og:title" content="Next lib starter: A nextjs doc stater template" />
      <meta property="og:description" content="Next lib starter: A nextjs doc stater template" />
      <meta name="apple-mobile-web-app-title" content="Next lib starter" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <meta name="twitter:image" content={lib_logo} />
      <link rel="shortcut icon" href={fav} />
    </Head>
  ),
}