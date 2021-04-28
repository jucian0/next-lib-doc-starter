/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem 0;
  *{
    font-family:monospace;
    font-size: inherit;
    white-space: pre;
    font-size: .875rem;
    }
  & pre {
    border-radius: 8px;
    padding-left:16px;
  }

  & .header{
    display:flex;
    justify-content:flex-end;

  & .language{
    font-family:'Roboto', sans-serif!important;
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 0 0 2px 2px;
    margin-right:5px;
    width:max-content;
    padding:4px;
    display:inline;
  }

  & button {
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    padding-top:5px;
    border-radius: 0 0 2px 2px;
    margin-right:10px;
  }
  }
`