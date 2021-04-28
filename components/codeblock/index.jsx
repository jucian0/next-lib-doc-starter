/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { MdContentCopy } from "react-icons/md";
import {Container,Line,LineContent,LineNo} from './styles'

const theme = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)",
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};


export default function CodeBlock({ children, className}){
   const language = className.replace(/language-/, '')

   return (
     <Highlight {...defaultProps} code={children} language={language} theme={theme}>
       {({ className, style, tokens, getLineProps, getTokenProps }) => (
         <Container>
           <pre className={className} style={style}>
             <div className="header">
               <div className="language">{language}</div>
               <CopyButton />
             </div>
             {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                 <LineNo>{i + 1}</LineNo>
                 <LineContent>
                   {line.map((token, key) => (
                     <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                 </LineContent>
               </Line>
        ))}
           </pre>
         </Container>
    )}
     </Highlight>
   )
}

export const CopyButton = ({ hasCopied, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props}><MdContentCopy color="#fff" /></button>
  )
}