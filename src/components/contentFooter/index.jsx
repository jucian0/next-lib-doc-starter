import React from 'react';
import config from '../../config';
import * as S from './styles';
import {useRouter} from 'next/router';
import {MdEdit} from 'react-icons/md'
const fixPath = path => {
   const pathWithFrontSlash = path.startsWith('/') ? path : `/${path}`
   const pathWithBackSlash = pathWithFrontSlash.endsWith('/')
     ? pathWithFrontSlash
     : `${pathWithFrontSlash}/`
 
   return pathWithBackSlash
 }

const createEditUrl = (repository, branch, path, filepathWithName) => {
   const normalizedPath = fixPath(path)
   return `${repository}/tree/${branch}${normalizedPath}src/pages${filepathWithName}.mdx`
 }

const EditOnGithubLink = ({
   repository,
   branch,
   path,
   footerEditOnGitHubText,
   filepathWithName
 }) => {
   const href = createEditUrl(repository, branch, path, filepathWithName)
   const { locale } = useRouter()
   return (
     <a className="text-sm" href={href} target="_blank"><MdEdit size="1.2rem"/>&nbsp;Edit this page on GitHub</a>
   )
}

export default function ContentFooter(){

   const {route} = useRouter()

   return(
      <S.Wrapper>

<EditOnGithubLink
      repository={config.docsRepository || config.repository}
      branch={config.branch}
      path={config.path}
      footerEditOnGitHubText={config.footerEditOnGitHubText}
      filepathWithName={route}
/>
      </S.Wrapper>
   )
}