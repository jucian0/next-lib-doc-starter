/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/palenight";
import { MdContentCopy,MdCheck } from "react-icons/md";
import useClipboard from "react-use-clipboard";
import {Container,} from './styles'


export default function CodeBlock({ children, className}){
   const language = className.replace(/language-/, '')
   const [isCopied, setCopied] = useClipboard(children,{successDuration:1000});

   return (
     <Highlight {...defaultProps} code={children} language={language} theme={theme}>
       {({ className, style, tokens, getLineProps, getTokenProps }) => (
         <Container>
           <pre className={className} style={style}>
             <div className="header">
               <div className="language">{language}</div>
               <CopyButton onClick={setCopied} isCopied={isCopied}/>
             </div>
             {tokens.map((line, i) => (
               <div {...getLineProps({ line, key: i })}>
                 {line.map((token, key) => (
                   <span {...getTokenProps({ token, key })} />
            ))}
               </div>
        ))}
           </pre>
         </Container>
    )}
     </Highlight>
   )
}

export const CopyButton = ({ isCopied, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props}>{isCopied ? <MdCheck color="#fff"/>:<MdContentCopy color="#fff" />}</button>
  )
}