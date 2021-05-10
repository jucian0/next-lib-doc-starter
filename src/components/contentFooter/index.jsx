import React, { useMemo } from 'react';
import config from '../../config';
import * as S from './styles';
import { useRouter } from 'next/router';
import { MdEdit } from 'react-icons/md'
import Link from 'next/link';
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
    <a href={href} target="_blank"><MdEdit size="1.2rem" />&nbsp;Edit this page on GitHub</a>
  )
}

export default function ContentFooter() {

  const router = useRouter()
  const { route, asPath, locale, defaultLocale } = router

  const directories = useMemo(() => cleanupAndReorder(pageMap, locale, defaultLocale), [pageMap, locale, defaultLocale])
  const flatDirectories = useMemo(() => flatten(directories), [directories])

  let prev = flatDirectories[currentIndex - 1]
  let next = flatDirectories[currentIndex + 1]

  return (
    <S.Wrapper>

      {
        prev && <Link>Prev</Link>
      }

      {
        next && <Link>Next</Link>
      }


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