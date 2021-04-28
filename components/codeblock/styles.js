/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem 0;
  & pre {
    border-radius: 8px;
  }

  & .header{
    display:flex;
    justify-content:flex-end;

  & .language{
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

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  padding-left:1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;