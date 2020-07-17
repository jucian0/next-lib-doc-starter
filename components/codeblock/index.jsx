/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";


export default function CodeBlock({ children, className}){
   const language = className.replace(/language-/, '')

   return (
     <CopyBlock
       language={language}
       text={children.trim()}
       codeBlock
       theme={dracula}
       showLineNumbers
       wrapLines
     />
   )
}